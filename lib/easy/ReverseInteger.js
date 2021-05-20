// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversedX = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
  if (reversedX < Math.pow(-2, 31) || reversedX > Math.pow(2, 31) - 1) {
    return 0;
  }
  return reversedX;
};