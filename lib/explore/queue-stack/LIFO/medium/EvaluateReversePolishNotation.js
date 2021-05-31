// https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/1394/
// https://leetcode.com/problems/evaluate-reverse-polish-notation/


const OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => Math.trunc(a / b),
  "*": (a, b) => a * b,
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  if (tokens.length === 1) return tokens[0];

  while (tokens.length !== 0) {
    let t = tokens.shift();
    if (t in OPERATORS) {
      const right = stack.pop();
      const left = stack.pop();
      const operation = OPERATORS[t];
      stack.push(operation(left, right));
    } else stack.push(Number(t));
  }
  return stack.pop();
};