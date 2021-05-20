// https://leetcode.com/problems/max-consecutive-ones/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count += 1;
    } else {
      maxCount = count > maxCount ? count : maxCount;
      count = 0;
    }
  }
  return count > maxCount ? count : maxCount;
};