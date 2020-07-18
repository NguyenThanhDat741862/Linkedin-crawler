const { SCREENSHOT_CONFIG, MAX_ITEM_PER_PAGE } = require('../config')
const { genFileName } = require('../utils')
const {
  JOB_ITEM_SELECTOR,
  JOB_PANEL_SELECTOR
} = require('../selector')
const { 
  parseCompanyInfo,
  parseJobDescriptionDetail,
  parseJobId,
} = require('../parser')
const extractJobId = require('./extractJobId')
const extractJobTitle = require('./extractJobTitle')
const extractCompanyInfo = require('./extractCompanyInfo')
const extractJobDescription = require('./extractJobDescription')
const extractJobDescriptionDetail = require('./extractJobDescriptionDetail')

module.exports = async function extractor (page, writer) {
  await page.exposeFunction('parseJobId', parseJobId)
  await page.exposeFunction('parseCompanyInfo', parseCompanyInfo)
  await page.exposeFunction('parseJobDescriptionDetail', parseJobDescriptionDetail)

  // Page start count item from 1
  for (let i = 1; i <= MAX_ITEM_PER_PAGE; i++) {
    const currentJobItem = await page.$(JOB_ITEM_SELECTOR(i))
    const panelJobDetail = await page.$(JOB_PANEL_SELECTOR)

    const jobId = await page.evaluate(extractJobId, currentJobItem)

    await page.waitFor(500)

    const jobTitle = await page.evaluate(extractJobTitle, panelJobDetail)
    const {
      companyName,
      companyLocation
    } = await page.evaluate(extractCompanyInfo, panelJobDetail)
    const jobDescription = await page.evaluate(extractJobDescription, panelJobDetail)
    const {
      seniorityLevel,
      industry,
      employmentType,
      jobFunctions
    } = await page.evaluate(extractJobDescriptionDetail, panelJobDetail)

    writer.write((i == 1 ? '' : ',') + JSON.stringify({
      jobId,
      jobTitle,
      companyName,
      companyLocation,
      jobDescription,
      seniorityLevel,
      industry,
      employmentType,
      jobFunctions
    }))

    // await page.screenshot(SCREENSHOT_CONFIG(genFileName('png')))
  }
}