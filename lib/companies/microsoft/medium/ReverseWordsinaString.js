// https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/166/
// https://leetcode.com/problems/reverse-words-in-a-string/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const localS = s.replace(/\s+/g, ' ').trim()
  const sList = localS.split(' ');
  let [start, end] = [0, sList.length - 1];
  while (start < end) {
    let tmp = sList[start];
    sList[start] = sList[end];
    sList[end] = tmp;
    start++;
    end--;
  }
  return sList.join(' ');
};