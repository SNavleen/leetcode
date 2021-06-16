// https://leetcode.com/explore/interview/card/microsoft/49/dynamic-programming/156
// https://leetcode.com/problems/longest-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let memo = new Array(nums.length).fill(1);
  let max = memo[0];
  for (let i = 1; i < nums.length; i++) {
    let maxval = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j])
        maxval = Math.max(maxval, memo[j]);
    }
    memo[i] = maxval + 1;
    max = Math.max(max, memo[i]);
  }
  return max;
};