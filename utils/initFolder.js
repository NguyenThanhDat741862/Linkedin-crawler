const fs = require('fs')
const path = require('path')

module.exports = function initFolder (folderName) {
  if ( !fs.existsSync(folderName) ) { fs.mkdirSync(folderName) }
  else {
    const files = fs.readdirSync(folderName)

    for (const file of files) {
      fs.unlinkSync(path.join(folderName, file))
    }
  }
}