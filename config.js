module.exports = {
  SCREENSHOT_PATH: './screenshots',
  ARCHIVE_PATH: './data',

  // Each page has 25 job postings
  // Maxium page user can access is 40

  MAX_ITEM_PER_PAGE: 25,
  MAX_PAGINATION_PAGE: 2,

  LAUNCH_CONFIG: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ]
  },

  VIEWPORT_CONFIG: {
    width: 1200,
    height: 800
  },

  SCREENSHOT_CONFIG: (fileName) => ({ path: `./screenshots/${fileName}` })
}