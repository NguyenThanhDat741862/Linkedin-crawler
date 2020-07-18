const { parseCompanyInfo } = require('../parser')

module.exports = function extractCompanyInfo (element) {
  return parseCompanyInfo(element.querySelector('.jobs-details-top-card__company-info').innerText)
}