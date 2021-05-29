// https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/1371/
// https://leetcode.com/problems/perfect-squares/solution/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
      dp[i] = Math.min(dp[i - j ** 2] + 1, dp[i]);
    }
  }
  return dp[n];
};