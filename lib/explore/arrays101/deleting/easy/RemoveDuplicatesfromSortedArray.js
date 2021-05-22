// https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};