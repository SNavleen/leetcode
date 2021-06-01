// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
// https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let wp = 0;
  let totalZero = 0;
  for (let rp = 0; rp < nums.length; rp++) {
    if (nums[rp] === 0) totalZero++;
    else nums[wp++] = nums[rp];
  }
  while (totalZero !== 0) {
    nums[wp++] = 0;
    totalZero--;
  }
  return nums;
};