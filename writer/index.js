// const achirveDataToJson = require('./json')
const {
  createJsonWriter,
  closeJsonWriter
} = require('./json')

const {
  createCsvWriter,
  closeCsvWriter
} = require('./csv')

let typeStream = ''

function createWriterStream (type) {
  typeStream = type
  const { writeStream, writer } = typeStream == 'Json' ? createJsonWriter() : createCsvWriter()

  writeStream.on('finish', () => {
    console.log('All writes are now complete.');
  })

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