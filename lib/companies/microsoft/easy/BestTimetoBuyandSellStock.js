// https://leetcode.com/explore/interview/card/microsoft/49/dynamic-programming/186/
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minP = Infinity;
  let maxP = 0;
  for (let i = 0; i < prices.length; i++) {
    minP = Math.min(prices[i], minP);
    maxP = Math.max(prices[i] - minP, maxP);
  }
  return maxP;
};