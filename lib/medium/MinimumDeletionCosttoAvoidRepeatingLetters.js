// https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/
/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
const minCost = (s, cost) => {
  let prev = 0;
  let min = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[prev]) {
      if (cost[i] < cost[prev]) {
        min += cost[i];
      } else {
        min += cost[prev]
        prev = i;
      }
    } else {
      prev = i;
    }
  }

  return min;
};