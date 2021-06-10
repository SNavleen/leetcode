// https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/213/
// https://leetcode.com/problems/reverse-words-in-a-string-ii/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  if (s.length === 1) return s;

  reverse(s, 0, s.length - 1);

  let [start, end] = [0, 0];
  let i = 0;
  while (i <= s.length) {
    if (s[i] === ' ' || i === s.length) {
      end = i - 1;
      reverse(s, start, end)
      start = i + 1;
    }
    i++
  }
  return s;
};

function reverse(s, start, end) {

  while (start <= end) {
    swap(s, start, end);
    start++;
    end--;
  }
}

function swap(s, start, end) {
  const tmp = s[start];
  s[start] = s[end];
  s[end] = tmp;
}