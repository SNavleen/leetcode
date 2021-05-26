// https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1368/
// https://leetcode.com/problems/moving-average-from-data-stream/
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.len = size;
  this.currLen = 0;
  this.queue = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.currLen === this.len) {
    this.queue.pop();
    this.currLen--;
  }

  this.queue.unshift(val);
  this.currLen++;
  return this.getAverage();
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.getAverage = function () {
  let total = 0;
  for (let i = 0; i < Math.min(this.currLen, this.len); i++) {
    let val = this.queue.pop();
    this.queue.unshift(val);
    total += val;
  }
  return total / this.currLen;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */