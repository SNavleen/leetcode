// https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/187/
// https://leetcode.com/problems/reverse-string/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  helper(s, -1);
  return s;
};

function helper(s, idx) {
  idx++;
  if (idx >= Math.floor(s.length / 2))
    return;
  helper(s, idx);
  swap(s, idx, s.length - 1 - idx);
  return;
}

function swap(s, start, end) {
  let tmp = s[start];
  s[start] = s[end];
  s[end] = tmp;
}