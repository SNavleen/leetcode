// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const len = arr.length;
  let [last, val] = [-1, -1];
  for (let i = len - 1; i >= 0; i--) {
    val = val > arr[i] ? val : arr[i];
    arr[i] = last;
    last = val;
  }
  return arr;
};