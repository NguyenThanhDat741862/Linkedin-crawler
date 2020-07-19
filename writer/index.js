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
const writeType = {
  json: createJsonWriter,
  csv: createCsvWriter
}

function createWriterStream (type) {
  typeStream = type
  const { writeStream, writer } = writeType[typeStream]()

  log('=====================================================')
  log('Start crawling')
  log('..............')
  writeStream.on('finish', () => {
    log('..............')
    log('Crawl complete.')
    log(`Result file data.${typeStream} is generated`)
    log('=====================================================')
  })
  writeStream.on('error', err => { log(`Error: ${err.message}`) })

  return { writeStream, writer }
}

function closeWriterStream (writeStream) {
  if (typeStream == 'json') closeJsonWriter(writeStream)
  if (typeStream == 'csv')  closeCsvWriter(writeStream)
}

module.exports = {
  createWriterStream,
  closeWriterStream
}