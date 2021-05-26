// https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1337/
// https://leetcode.com/problems/design-circular-queue/submissions/
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.len = k;
  this.currLen = 0;
  this.head = -1;
  this.tail = -1;
  this.queue = new Array(this.len);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;

  if (this.isEmpty()) this.head = 0;

  this.tail++;
  if (this.tail > this.len - 1) this.tail = 0

  this.queue[this.tail] = value;
  this.currLen++;

  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;

  this.queue[this.head];
  this.currLen--;

  if (this.isSame()) {
    this.head = -1;
    this.tail = -1;
  } else {
    this.head++;
    if (this.head > this.len - 1) this.head = 0;
  }


  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return (this.head >= 0) ? this.queue[this.head] : -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return (this.tail >= 0) ? this.queue[this.tail] : -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isSame = function () {
  return (this.head === this.tail);
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return (this.currLen === 0);
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.currLen === this.len);
};

MyCircularQueue.prototype.print = function () {
  console.log(this.len);
  console.log(this.currLen);
  console.log(this.head);
  console.log(this.tail);
  console.log(this.queue);
  console.log('\n');
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */