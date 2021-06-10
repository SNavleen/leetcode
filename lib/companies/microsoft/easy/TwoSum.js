// https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/173/
// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let [i, n] of Object.entries(nums)) {
    if (map.has(n)) return [map.get(n), i];
    map.set(target - n, i);
  }
  return [];
};