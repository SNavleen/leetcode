// https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/1361/
// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const [OPEN_CIR, CLOSE_CIR] = ['(', ')'];
  const [OPEN_SQ, CLOSE_SQ] = ['[', ']'];
  const [OPEN_CURL, CLOSE_CURL] = ['{', '}'];
  const [OPEN_TRI, CLOSE_TRI] = ['<', '>'];

  let sArr = s.split('');
  let openStack = [];
  for (const [key, val] of sArr.entries()) {
    if (val === OPEN_CIR || val === OPEN_SQ || val === OPEN_CURL || val === OPEN_TRI) {
      openStack.push(val);
    } else {
      let expected = openStack.pop();
      if ((expected === OPEN_CIR && val === CLOSE_CIR) ||
        (expected === OPEN_SQ && val === CLOSE_SQ) ||
        (expected === OPEN_CURL && val === CLOSE_CURL) ||
        (expected === OPEN_TRI && val === CLOSE_TRI)
      ) {
        continue;
      }

      return false;
    }
  }
  if (openStack.length > 0) return false;
  return true;
};