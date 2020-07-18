module.exports = function extractJobTitle (element) {
  return `${element.querySelector('h2').innerText}`
}