// https://leetcode.com/explore/learn/card/queue-stack/239/conclusion/1387/
// https://leetcode.com/problems/implement-stack-using-queues/
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.mainQueue = new Array();
  this.backupQueue = new Array();
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.mainQueue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.mainQueue.length > 1) {
    this.backupQueue.push(this.mainQueue.shift())
  }
  let val = this.mainQueue.shift();
  this.mainQueue = this.backupQueue;
  this.backupQueue = [];
  return val;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.mainQueue[this.mainQueue.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.mainQueue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */