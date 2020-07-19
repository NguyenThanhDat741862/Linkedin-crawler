module.exports = {
  SCREENSHOT_PATH: './screenshots',
  ARCHIVE_PATH: './data',
  MAX_ITEM_PER_PAGE: 25,
  MAX_PAGINATION_PAGE: 10,

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