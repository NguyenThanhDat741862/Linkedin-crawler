const { parseJobId } = require('../parser')

module.exports = function extractJobId (element) {
  element.scrollIntoView()
  element.firstElementChild.click()
  console.log(element.innerText)
  return parseJobId(element.getAttribute('data-occludable-entity-urn'))
}