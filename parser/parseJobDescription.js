module.exports = function parseJobDescription (text) {
  return text.replace(/"/g, '”')
}