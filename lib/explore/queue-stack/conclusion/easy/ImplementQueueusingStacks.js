// https://leetcode.com/explore/learn/card/queue-stack/239/conclusion/1386/
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.mainStack = [];
  this.backupStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.mainStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.backupStack.length === 0) {
    while (this.mainStack.length !== 0) {
      this.backupStack.push(this.mainStack.pop());
    }
  }
  return this.backupStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.backupStack[this.backupStack.length - 1] || this.mainStack[0] || null;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.mainStack.length === 0 && this.backupStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */