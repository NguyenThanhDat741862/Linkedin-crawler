const fs = require('fs')
const path = require('path')
const { handleNewlineChar } = require('../utils')
const { ARCHIVE_PATH } = require('../config')

function handleCsvRecord ({ jobId, jobTitle, companyName, companyLocation, jobDescription, seniorityLevel, industry, employmentType, jobFunctions }) {
  return handleNewlineChar(`${jobId},\"${jobTitle}\",\"${companyName}\",\"${companyLocation}\",\"${jobDescription}\",\"${seniorityLevel}\",\"${industry}\",\"${employmentType}\",\"${jobFunctions}\"`) + '\n'
}

function createCsvWriter () {
  const writeStream = fs.createWriteStream(path.join(ARCHIVE_PATH, `data.csv`), { flags: 'a' })
  writeStream.write('jobId,jobTitle,companyName,companyLocation,jobDescription,seniorityLevel,industry,employmentType,jobFunctions\n')

  return ({
    writeStream,
    writer: (record) => writeStream.write(handleCsvRecord(record))
  })
}

function closeCsvWriter (writer) {
  writer.end()
}

module.exports = {
  createCsvWriter,
  closeCsvWriter
}