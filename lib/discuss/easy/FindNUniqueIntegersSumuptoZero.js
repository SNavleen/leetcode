// https://leetcode.com/discuss/interview-question/398023/Microsoft-Online-Assessment-Questions
// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let res = [];
  if (n % 2 === 1) {
    res.push(0);
    n--;
  }

  let num = 0;
  for (let i = n; i > 0; i -= 2) {
    num++;
    res.push(num);
    res.push(-num)
  }

  return res;

};