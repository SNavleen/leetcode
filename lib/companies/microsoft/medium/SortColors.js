// https://leetcode.com/explore/interview/card/microsoft/47/sorting-and-searching/193/
// https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length === 0 || nums.length === 1) return nums;
  let [low, curr, high] = [0, 0, nums.length - 1];
  while (curr <= high) {
    if (nums[curr] === 0) {
      let tmp = nums[curr];
      nums[curr] = nums[low];
      nums[low] = tmp;
      low++;
      curr++;
    } else if (nums[curr] === 2) {
      let tmp = nums[curr];
      nums[curr] = nums[high];
      nums[high] = tmp;
      high--;
    } else if (nums[curr] === 1) {
      curr++;
    }
  }
  return nums;
};