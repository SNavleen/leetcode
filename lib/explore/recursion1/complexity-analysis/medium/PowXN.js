// https://leetcode.com/explore/learn/card/recursion-i/256/complexity-analysis/2380/
// https://leetcode.com/problems/powx-n/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  function calc(lx, ln) {
    if (ln === 0) return 1.0;
    let val = calc(lx, Math.floor(ln / 2));
    if (ln % 2 === 0) return val * val;
    else return lx * val * val;
  }
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  return calc(x, n);
};