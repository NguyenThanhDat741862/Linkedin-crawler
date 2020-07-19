const { parseJobDescription } = require('../parser')

module.exports = async function extractJobDescription (element) {
  return `${await parseJobDescription(element.querySelector('.jobs-description-content__text > span').innerText)}`
}