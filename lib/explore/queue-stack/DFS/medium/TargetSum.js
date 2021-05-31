// https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/1389/
// https://leetcode.com/problems/target-sum/
/**
 * This version has recursion with out memorization
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWaysV1 = function (nums, target) {
  function dfs(idx, sum) {
    if (idx === nums.length) return sum === target ? 1 : 0;

    return dfs(idx + 1, sum + nums[idx]) + dfs(idx + 1, sum - nums[idx]);
  }
  return dfs(0, 0);
};

/**
 * This version has recursion with memorization
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWaysV2 = function (nums, target) {
  let map = new Map();

  function dfs(idx, sum) {
    if (idx === nums.length) return sum === target ? 1 : 0;
    if (map.has(`${idx}-${sum}`)) return map.get(`${idx}-${sum}`);

    const res = dfs(idx + 1, sum + nums[idx]) + dfs(idx + 1, sum - nums[idx]);
    map.set(`${idx}-${sum}`, res);
    return res;
  }
  return dfs(0, 0);
};