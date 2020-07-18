const { parseJobDescriptionDetail } = require('../parser')

module.exports = function extractJobDescriptionDetail (element) {
  element.scrollIntoView()
  return parseJobDescriptionDetail(element.querySelector('.jobs-description-details').innerText)
}