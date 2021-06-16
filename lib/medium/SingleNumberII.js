// https://leetcode.com/problems/single-number-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();
  for (let n of nums) {
    if (map.has(n))
      map.set(n, map.get(n) + 1);
    else
      map.set(n, 1);
    if (map.get(n) >= 3)
      map.delete(n);
  }
  return map.keys().next().value;
};