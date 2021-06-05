// https://leetcode.com/problems/unique-binary-search-trees/
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  function rec(n) {
    if (n === 0) return 1;
    const calc = rec(n - 1) * ((2 * ((2 * n) + 1)) / (n + 2));
    return Math.floor(calc);
  }
  return rec(n - 1);
};