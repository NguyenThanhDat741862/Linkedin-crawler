// const achirveDataToJson = require('./json')
const {
  createJsonWriter,
  closeJsonWriter
} = require('./json')

const {
  createCsvWriter,
  closeCsvWriter
} = require('./csv')

const { log } = require('../logger')

let typeStream = ''

function createWriterStream (type) {
  typeStream = type
  const { writeStream, writer } = typeStream == 'Json' ? createJsonWriter() : createCsvWriter()

  log('=====================================================')
  log('Start crawling')
  log('..............')
  writeStream.on('finish', () => {
    log('..............')
    log('Crawl complete.')
    log(`Result file data.${typeStream == 'Json' ? 'json' : 'csv'} is generated`)
    log('=====================================================')
  })
  writeStream.on('error', err => { log(`Error: ${err.message}`) })

  return { writeStream, writer }
}

function closeWriterStream (writeStream) {
  if (typeStream == 'Json') {
    closeJsonWriter(writeStream)
  } else {
    closeCsvWriter(writeStream)
  }
}

module.exports = {
  createWriterStream,
  closeWriterStream
}