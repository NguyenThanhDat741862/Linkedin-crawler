module.exports = function parseCompanyInfo (text) {
  // Company info format
  // 
  //      Company Name
  //      <COMPANY_NAME>
  //      Company Location
  //      <COMPANY_LOCATION>
  //
  // Need to remove label line to get needed data
  const tokens = text.split('\n').filter(i => i !== 'Company Name' && i !== 'Company Location')
  
  return {
    companyName: tokens[0],
    companyLocation: tokens[1]
  }
}