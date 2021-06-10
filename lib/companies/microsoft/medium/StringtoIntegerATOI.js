// https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/171/
// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let output = 0;
  let neg = false;
  let localS = s.replace(/^\s+/g, '');

  if (localS.length === 0) return output;
  if (!isNumber(localS[0]) && localS[0] != '-' && localS[0] != '+') return output;
  for (const [i, c] of Object.entries(localS)) {
    if (isNumber(c)) {
      output *= 10;
      output += parseInt(c);
    } else if (c === '-' && i === '0') neg = true;
    else if (c === '+' && i === '0') neg = false;
    else break;
  }
  if (neg) output *= -1;
  if (output > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (output < Math.pow(-2, 31)) return Math.pow(-2, 31);
  return output;
};

function isNumber(str) {
  return /^\d+$/.test(str);
}