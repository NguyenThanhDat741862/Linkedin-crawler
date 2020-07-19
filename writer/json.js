const fs = require('fs')
const path = require('path')
const { ARCHIVE_PATH } = require('../config')

function createJsonWriter () {
  const writeStream = fs.createWriteStream(path.join(ARCHIVE_PATH, `data.json`), { flags: 'a' })
  writeStream.write('[')

  return ({
    writeStream,
    writer: (record, isFirst) => writeStream.write((isFirst ? '' : ',') + JSON.stringify(record))
  })
}

function closeJsonWriter (writer) {
  writer.write(']')
  writer.end()
}

module.exports = {
  createJsonWriter,
  closeJsonWriter
}