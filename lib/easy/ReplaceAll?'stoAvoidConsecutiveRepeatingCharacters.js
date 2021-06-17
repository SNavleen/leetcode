// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const arr = s.split('')
  let res = ''
  for (let i = 0; i < s.length; i++) {
    const curr = arr[i]
    if (curr !== '?') continue
    const prevCharCode = (arr[i - 1] || '').charCodeAt(0)
    const nextCharCode = (arr[i + 1] || '').charCodeAt(0)
    let random = 0
    while (!random) {
      random = Math.floor(Math.random() * 26);
      random += 97 // starting at 'a'
      if (random === prevCharCode || random === nextCharCode) {
        random = 0
        continue
      }
      arr[i] = String.fromCharCode(random)
      break
    }
  }
  return arr.join('')
};