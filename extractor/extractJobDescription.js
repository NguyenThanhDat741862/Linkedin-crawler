module.exports = function extractJobDescription (element) {
  return `"${element.querySelector('.jobs-description-content__text > span').innerText}"`
}