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
  SCREENSHOT_CONFIG,
  VIEWPORT_CONFIG,
  LAUNCH_CONFIG
} = require('./config')

const {
  initFolder,
  genFileName
} = require('./utils')

const extractor = require('./extractor')

async function main() {
  // Clear screenshots folder
  initFolder(SCREENSHOT_PATH)

  const browser = await puppeteer.launch(LAUNCH_CONFIG)
  const page = await browser.newPage()

  await page.setViewport(VIEWPORT_CONFIG)

  await page.goto(LOGIN_URL)

  // Login
  await page.type(USERNAME_INPUT_SELECTOR, 'latejohn1248@gmail.com')
  await page.type(PASSWORD_INPUT_SELECTOR, 'vvR)nJSn%Y3RiF5')
  await Promise.all([
    page.click(SUBMIT_INPUT_SELECTOR),
    page.waitForNavigation(),
  ])
  
  // Navigate to Job posting page
  await page.goto(JOB_LIST_URL)

  await extractor(page)

  await browser.close()
}

main()