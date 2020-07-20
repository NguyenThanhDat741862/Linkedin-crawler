const { SCREENSHOT_CONFIG, MAX_ITEM_PER_PAGE, MAX_PAGINATION_PAGE } = require('../config')
const { genFileName } = require('../utils')
const { log } = require('../logger')
const {
  JOB_ITEM_SELECTOR,
  JOB_PANEL_SELECTOR,
  PAGINATION_SELECTOR
} = require('../selector')
const { 
  parseCompanyInfo,
  parseJobDescriptionDetail,
  parseJobDescription,
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
  await page.exposeFunction('parseJobDescription', parseJobDescription)
  await page.exposeFunction('parseJobDescriptionDetail', parseJobDescriptionDetail)

  for (let paginationPage = 2; paginationPage <= MAX_PAGINATION_PAGE; paginationPage++) {
  // Page start count item from 1
    for (let jobItem = 1; jobItem <= MAX_ITEM_PER_PAGE; jobItem++) {
      const currentJobItem = await page.$(JOB_ITEM_SELECTOR(jobItem))
      const panelJobDetail = await page.$(JOB_PANEL_SELECTOR)

      // Get jobID and click element to page load job posting detail
      const jobId = await page.evaluate(extractJobId, currentJobItem)

      // Wait for page load
      await page.waitFor(500)

      // Get detail data from posting
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

      // Write to file
      writer({
        jobId,
        jobTitle,
        companyName,
        companyLocation,
        jobDescription,
        seniorityLevel,
        industry,
        employmentType,
        jobFunctions
      }, jobItem == 1 && paginationPage == 2)
    }

    log(`Page ${paginationPage - 1} done`)
    await page.screenshot(SCREENSHOT_CONFIG(genFileName('png')))

    // Go to next page
    await page.click(PAGINATION_SELECTOR(paginationPage))
    await page.waitFor(1000)
  }

  log(`Page ${MAX_PAGINATION_PAGE} done`)
  await page.screenshot(SCREENSHOT_CONFIG(genFileName('png')))
}