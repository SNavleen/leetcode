// https://leetcode.com/explore/interview/card/microsoft/46/backtracking/165/
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
const keypad = [
  [0, 0],
  [0, 0],
  [0, 2],
  [3, 5],
  [6, 8],
  [9, 11],
  [12, 14],
  [15, 18],
  [19, 21],
  [22, 25]
]
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = [];
  let keysPressed = digits.split('');
  if (keysPressed.length === 0) return [];
  function backtrack(digits, ans) {
    if (digits.length === 0) {
      res.push(ans);
      return;
    }
    let d = parseInt(digits.shift());
    let chars = charsAtIdxs(keypad[d]);

    for (let c of chars) {
      backtrack(digits, ans + c);
    }
    digits.unshift(d);
  }
  backtrack(keysPressed, '');
  return res;
};

function charsAtIdxs(idxs) {
  let res = [];
  for (i = idxs[0]; i <= idxs[1]; i++) {
    res.push((i + 10).toString(36));
  }
  return res;
}