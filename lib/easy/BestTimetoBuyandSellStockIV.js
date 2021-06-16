// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (k === 0) return 0;
  let costs = new Array(k).fill(Infinity);
  let profits = new Array(k).fill(0);
  for (let price of prices) {
    for (let i = 0; i < k; i++) {
      costs[i] = Math.min(costs[i], price - (profits[i - 1] || 0));
      profits[i] = Math.max(profits[i], price - costs[i]);
    }
  }
  return profits[k - 1];
};