module.exports = function parseJobId (text) {
  return text.replace('urn:li:fs_normalized_jobPosting:', '').trim()
}