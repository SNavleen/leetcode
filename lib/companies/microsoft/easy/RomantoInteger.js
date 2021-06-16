// https://leetcode.com/explore/interview/card/microsoft/48/others/198/
// https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
        total -= 1;
        i++;
      } else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
        total -= 10;
        i++;
      } else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
        total -= 100;
        i++;
      }
    }
    s[i] === 'I' ? total += 1 : total;
    s[i] === 'V' ? total += 5 : total;
    s[i] === 'X' ? total += 10 : total;
    s[i] === 'L' ? total += 50 : total;
    s[i] === 'C' ? total += 100 : total;
    s[i] === 'D' ? total += 500 : total;
    s[i] === 'M' ? total += 1000 : total;
  }
  return total;
};