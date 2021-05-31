// https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/1363/
// https://leetcode.com/problems/daily-temperatures/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    let currTemp = temperatures[i];
    let top = null;

    while (stack.length) {
      top = stack[stack.length - 1];
      if (top[0] > currTemp) break;
      stack.pop();
    }

    if (stack.length == 0) temperatures[i] = 0;
    else temperatures[i] = top[1] - i;

    stack.push([currTemp, i]);
  }

  return temperatures;
};