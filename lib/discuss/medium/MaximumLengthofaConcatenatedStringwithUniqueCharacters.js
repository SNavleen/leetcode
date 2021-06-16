// https://leetcode.com/discuss/interview-question/398023/Microsoft-Online-Assessment-Questions
// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let maxLen = -Infinity;

  if (isUnique(arr.join('')))
    return arr.join('').length;

  dfs('', 0);

  function dfs(string, start) {
    if (!isUnique(string))
      return;

    maxLen = Math.max(maxLen, string.length);

    for (let i = start; i < arr.length; i++) {
      let str = string + arr[i];
      dfs(string + arr[i], i + 1);
    }
  }

  return maxLen;
};

function isUnique(string) {
  let set = new Set();
  for (let s of string) {
    if (set.has(s))
      return false;
    set.add(s);
  }
  return true;
}
