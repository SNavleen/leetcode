// https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1661/
// https://leetcode.com/problems/fibonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let fibCache = new Map();
  function calc(n) {
    if (fibCache.has(n)) return fibCache.get(n);

    let res = 0;
    if (n < 2) res = n;
    else res = calc(n - 1) + calc(n - 2);

    fibCache.set(n, res);
    return res;
  }
  return calc(n);
};