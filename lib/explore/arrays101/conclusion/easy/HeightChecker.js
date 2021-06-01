// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/
// https://leetcode.com/problems/height-checker/
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const expected = heights.slice().sort((a, b) => a - b); // built-in sort, O(nlogn)
  let numNotMatched = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) numNotMatched++;
  }
  return numNotMatched;
};