module.exports = function parseCompanyInfo (text) {
  const tokens = text.split('\n').filter(i => i !== 'Company Name' && i !== 'Company Location')
  
  return {
    companyName: tokens[0].trim(),
    companyLocation: tokens[1].trim()
  }
}