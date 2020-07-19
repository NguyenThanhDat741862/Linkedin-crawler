module.exports = function log (text) {
  console.log('\x1b[36m', ' =====> ', '\x1b[33m', text, '\x1b[0m')
}