module.exports = function genFileName (format) {
  return `${(new Date).getTime()}.${format}`
}