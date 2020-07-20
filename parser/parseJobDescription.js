module.exports = function parseJobDescription (text) {
  // Replace double quote for column in csv file
  return text.replace(/"/g, '”')
}