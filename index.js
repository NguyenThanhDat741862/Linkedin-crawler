const puppeteer = require('puppeteer')

const {
  LOGIN_URL,
  JOB_LIST_URL
} = require('./url')

const {
  USERNAME_INPUT_SELECTOR,
  PASSWORD_INPUT_SELECTOR,
  SUBMIT_INPUT_SELECTOR
} = require('./selector')

const { 
  SCREENSHOT_PATH,
  ARCHIVE_PATH,
  SCREENSHOT_CONFIG,
  VIEWPORT_CONFIG,
  LAUNCH_CONFIG
} = require('./config')

const {
  initFolder,
  genFileName
} = require('./utils')

const {
  createWriterStream,
  closeWriterStream
} = require('./writer')

const {
  logTimeExe
} = require('./logger')

const extractor = require('./extractor')

const dataType = process.argv[2]
const linkedinUsername = 'latejohn1248@gmail.com'
const linkedinPassword = `vvR)nJSn%Y3RiF5`

async function main() {
  logTimeExe()

  // Init folder
  initFolder(SCREENSHOT_PATH)
  initFolder(ARCHIVE_PATH)

  // Launch browser
  const browser = await puppeteer.launch(LAUNCH_CONFIG)
  const page = await browser.newPage()
  await page.setViewport(VIEWPORT_CONFIG)
  
  // Login
  await page.goto(LOGIN_URL)
  await page.type(USERNAME_INPUT_SELECTOR, linkedinUsername)
  await page.type(PASSWORD_INPUT_SELECTOR, linkedinPassword)
  await Promise.all([
    page.click(SUBMIT_INPUT_SELECTOR),
    page.waitForNavigation(),
  ])
  
  // Extract
  await page.goto(JOB_LIST_URL)
  const { writeStream, writer } = createWriterStream(dataType)
  await extractor(page, writer)
  closeWriterStream(writeStream)

  await browser.close()
}

main()