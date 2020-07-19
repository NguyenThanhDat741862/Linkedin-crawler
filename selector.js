module.exports = {
  // Login form selectors
  USERNAME_INPUT_SELECTOR: '#username',
  PASSWORD_INPUT_SELECTOR: '#password',
  SUBMIT_INPUT_SELECTOR: '.login__form_action_container > button',

  // Extracted data selectors
  JOB_ITEM_SELECTOR: (i) => `.jobs-search-results__list > li:nth-child(${i})`,
  JOB_PANEL_SELECTOR: '.jobs-search-two-pane__details',

  // Pagination selectors
  PAGINATION_SELECTOR: (i) => `li > button[aria-label="Page ${i}"]`
}