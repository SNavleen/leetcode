// https://leetcode.com/explore/learn/card/recursion-i/253/conclusion/1675/
// https://leetcode.com/problems/k-th-symbol-in-grammar/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (N, K) {
  if (K <= 1) return 0;
  const mid = Math.ceil(K / 2);
  return K % 2 === kthGrammar(N, mid) ? 1 : 0;
};