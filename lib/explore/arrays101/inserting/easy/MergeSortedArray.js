// https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3253/
// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) {
      count++;
      if (count == n) {
        nums1.splice(nums1.length - n);
      }
    }
  }
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  return nums1;
};