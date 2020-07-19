module.exports = function handleNewlineChar (str) {
  return str.split('').map(i => i === '\n' ? `\\n` : i).join('')
}