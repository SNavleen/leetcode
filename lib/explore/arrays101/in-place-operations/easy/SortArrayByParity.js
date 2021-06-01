// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/
// https://leetcode.com/problems/sort-array-by-parity/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  if (nums.length === 1) return nums;
  let evenRP = 0;
  let oddRP = nums.length - 1;
  while (oddRP > evenRP) {
    while (nums[evenRP] % 2 === 0) evenRP++;
    while (nums[oddRP] % 2 === 1) oddRP--;

    if (oddRP < 0 || evenRP > nums.length - 1 || evenRP >= oddRP) return nums;

    let tmp = nums[evenRP];
    nums[evenRP] = nums[oddRP];
    nums[oddRP] = tmp;
    evenRP++;
    oddRP--;
  }
  return nums;
};