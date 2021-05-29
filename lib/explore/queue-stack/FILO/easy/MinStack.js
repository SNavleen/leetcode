// https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/1360/
// https://leetcode.com/problems/min-stack/
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = new Array();
  this.minStack = new Array();
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (!this.minStack.length) this.minStack.push(val);
  else this.minStack.push(Math.min(val, this.getMin()));

  this.stack.push(val);
  this.min = Math.min()
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return null;
  this.minStack.pop();
  let val = this.stack.pop();
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */