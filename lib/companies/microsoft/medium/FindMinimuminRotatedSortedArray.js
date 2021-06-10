// https://leetcode.com/explore/interview/card/microsoft/47/sorting-and-searching/206/
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
/**
 * Version 1 uses 2 pointers
 * @param {number[]} nums
 * @return {number}
 */
var findMinV1 = function (nums) {
  if (nums.length === 1) return nums[0];

  let [s, e] = [0, nums.length - 1];
  while (s < e) {
    if (nums[s] < nums[e])
      e--;
    else if (nums[s] >= nums[e])
      s++;
  }
  return nums[s] || nums[e];
};

/**
 * Version 2 uses binary search
 * @param {number[]} nums
 * @return {number}
 */
var findMinV2 = function (nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[right] < nums[mid]) left = mid + 1;
    else right = mid;
  }
  return nums[left] || nums[right];
};