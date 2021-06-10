// https://leetcode.com/explore/interview/card/microsoft/47/sorting-and-searching/207/
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else if (nums[mid] === nums[right]) right--;
    else right = mid;
  }
  return nums[left] || nums[right];
};