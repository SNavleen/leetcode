// https://leetcode.com/explore/interview/card/microsoft/48/others/208/
// https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let set = new Set();
  for (let n of nums) {
    if (set.has(n))
      set.delete(n);
    else
      set.add(n);
  }
  return set.values().next().value;
};