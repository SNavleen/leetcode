// https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/162/
// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const localS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let [start, end] = [0, localS.length - 1];
  while (start <= end) {
    if (localS[start] != localS[end]) return false;
    start++;
    end--;
  }
  return true;
};