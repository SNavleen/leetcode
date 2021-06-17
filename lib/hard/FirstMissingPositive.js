// https://leetcode.com/problems/first-missing-positive/
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  return firstMissingPositiveV3(nums);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositiveV1 = function (nums) {
  nums.sort((a, b) => a - b);
  nums = [...new Set(nums)]
  let checkNum = 1;
  for (let n of nums) {
    if (n <= 0)
      continue;
    if (n !== checkNum)
      return checkNum;
    checkNum++;
  }
  return checkNum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositiveV2 = function (nums) {
  let set = new Set(nums);

  for (let i = 1; i <= nums.length; i++)
    if (!set.has(i)) return i;
  return nums.length + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositiveV3 = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++)
    map.set(nums[i], true);

  for (let i = 1; i <= nums.length; i++)
    if (!map.has(i)) return i;
  return nums.length + 1;
};