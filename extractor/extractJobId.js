const { parseJobId } = require('../parser')

module.exports = function extractJobId (element) {
  element.scrollIntoView()
  element.firstElementChild.click()
  return parseJobId(element.getAttribute('data-occludable-entity-urn'))
}