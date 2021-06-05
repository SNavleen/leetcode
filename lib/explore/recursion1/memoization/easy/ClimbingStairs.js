// https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1662/
// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  let map = new Map();
  map.set(1, 1);
  map.set(2, 2);
  map.set(3, 3);

  function fib(n) {
    if (map.has(n)) return map.get(n)

    let val = fib(n - 2) + fib(n - 1);
    map.set(n, val);
    return val;
  }
  return fib(n);
};