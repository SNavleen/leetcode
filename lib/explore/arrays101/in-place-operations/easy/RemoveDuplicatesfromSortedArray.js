// https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let writePointer = 1;
  for (let readPointer = 1; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[readPointer - 1]) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }
  return writePointer;
};