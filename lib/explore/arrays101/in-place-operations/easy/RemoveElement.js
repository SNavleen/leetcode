// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3575/
// https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return [];
  let wp = 0;
  for (let rp = 0; rp < nums.length; rp++) {
    if (val === nums[rp]) continue;
    else if (val !== nums[rp]) nums[wp] = nums[rp];
    wp++;
  }
  nums = nums.length = wp;
  return nums;
};