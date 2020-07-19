module.exports = function logTimeExe () {
  const start = Date.now()
  process.on('exit', function() {
    var end = Date.now();
    console.log('\x1b[36m', ' =====> ', '\x1b[33m', `Time taken: \x1b[45m ${(end - start) / 1000}s`, '\x1b[0m');
  })
}