// https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3237/
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    let numLen = nums[i].toString().split('').length;
    if (numLen % 2 === 0) {
      count++;
    }
  }
  return count;
};