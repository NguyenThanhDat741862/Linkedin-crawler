const { SCREENSHOT_CONFIG } = require('../config')
const { genFileName } = require('../utils')
const { 
  parseCompanyInfo,
  parseJobDescriptionDetail,
  parseJobId
} = require('../parser')
const extractJobId = require('./extractJobId')
const extractJobTitle = require('./extractJobTitle')
const extractCompanyInfo = require('./extractCompanyInfo')
const extractJobDescription = require('./extractJobDescription')
const extractJobDescriptionDetail = require('./extractJobDescriptionDetail')

module.exports = async function extractor (page) {
  await page.exposeFunction('parseJobId', parseJobId)
  await page.exposeFunction('parseCompanyInfo', parseCompanyInfo)
  await page.exposeFunction('parseJobDescriptionDetail', parseJobDescriptionDetail)

  for (let i = 1; i <= 5; i++) {
    const currentJob = await page.$(`.jobs-search-results__list li:nth-child(${i})`)
    const panelJobDetail = await page.$('.jobs-search-two-pane__details')

    const jobId = await page.evaluate(extractJobId, currentJob)

    await page.waitFor(500)

    const jobTitle = await page.evaluate(extractJobTitle, panelJobDetail)
    const { companyName, companyLocation } = await page.evaluate(extractCompanyInfo, panelJobDetail)
    const jobDescription = await page.evaluate(extractJobDescription, panelJobDetail)
    const { seniorityLevel, industry, employmentType, jobFunctions } = await page.evaluate(extractJobDescriptionDetail, panelJobDetail)

    // await page.screenshot(SCREENSHOT_CONFIG(genFileName('png')))

    console.log(`${jobId},"${jobTitle}","${companyName}","${companyLocation}"`)
    console.log(`${seniorityLevel}, ${industry}, ${employmentType}, ${jobFunctions}`)

    // console.log(jobDescription)
  }
}