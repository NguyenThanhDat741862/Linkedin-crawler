module.exports = function parseJobId (text) {
  // Job description detail format
  //
  //      urn:li:fs_normalized_jobPosting:<JOB_ID>
  //
  // Need to remove 'urn:li:fs_normalized_jobPosting:' to get needed data
  return text.replace('urn:li:fs_normalized_jobPosting:', '').trim()
}