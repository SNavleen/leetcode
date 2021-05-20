// https://leetcode.com/problems/squares-of-a-sorted-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let newArray = Array();
  for (i = 0; i < nums.length; i++) {
    newArray.push(nums[i] * nums[i]);
  }
  return newArray.sort(function (a, b) { return a - b });
};