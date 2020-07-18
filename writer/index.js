// const achirveDataToJson = require('./json')
const fs = require('fs')
const path = require('path')
const { ARCHIVE_PATH } = require('../config')

function createWriterStream () {
  const writer = fs.createWriteStream(path.join(ARCHIVE_PATH, `data.json`), { flags: 'a' })

  writer.on('finish', () => {
    console.log('All writes are now complete.');
  })

  writer.write('[')
  return writer
}

function closeWriterStream (writer) {
  writer.write(']')
  writer.end()
}

module.exports = {
  createWriterStream,
  closeWriterStream
}