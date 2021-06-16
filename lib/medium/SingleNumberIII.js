// https://leetcode.com/problems/single-number-iii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let set = new Set();
  for (let n of nums) {
    if (set.has(n))
      set.delete(n);
    else
      set.add(n);
  }
  return Array.from(set);
};