// https://leetcode.com/problems/basic-calculator-ii/
/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  if (!s) return 0;
  const stack = [];
  let num = 0;
  let prevOp = '+';

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === ' ') continue;
    if (s[i] >= '0' && s[i] <= '9') {
      num = parseInt(num) * 10 + parseInt(s[i]);
      continue;
    }
    if (prevOp === '-') stack.push(-num);
    else if (prevOp === '+') stack.push(num);
    else if (prevOp === '*') stack.push(stack.pop() * num);
    else if (prevOp === '/') stack.push(Math.trunc(stack.pop() / num));
    prevOp = s[i];
    num = 0;
  }
  return stack.reduce((a, b) => a + b);
};