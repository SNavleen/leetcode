// https://leetcode.com/explore/learn/card/queue-stack/239/conclusion/1379/
// https://leetcode.com/problems/decode-string/
function createString(stack) {
  let output = '', number = '';
  while (stack.length > 0 && stack[stack.length - 1] !== '[') {
    output = stack.pop() + output;
  }
  // pop opening bracket
  stack.pop();

  while (stack.length > 0 && stack[stack.length - 1].charCodeAt() >= 48
    && stack[stack.length - 1].charCodeAt() <= 57) {
    number = stack.pop() + number;
  }
  stack.push(output.repeat(parseInt(number, 10)));
}

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (stack[stack.length - 1] === "]") {
      stack.pop();
      createString(stack);
    }
  }
  let res = "";
  while (stack.length > 0) {
    res = stack.pop() + res;
  }
  return res;
};
