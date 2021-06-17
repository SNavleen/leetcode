// https://leetcode.com/problems/subarray-sum-equals-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let [count, sum] = [0, 0];
  let sumMap = new Map();
  sumMap.set(0, 1);

  for (let [idx, num] of nums.entries()) {
    sum += num;
    if (sumMap.has(sum - k))
      count += sumMap.get(sum - k)
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }
  return count;
};