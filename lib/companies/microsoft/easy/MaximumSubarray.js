// https://leetcode.com/explore/interview/card/microsoft/49/dynamic-programming/174/
// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) return nums;

  let maxTotal = nums[0];
  let currTotal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (Math.sign(currTotal) === -1)
      currTotal = nums[i];
    else
      currTotal += nums[i];
    maxTotal = Math.max(maxTotal, currTotal);
  }
  return maxTotal;
};