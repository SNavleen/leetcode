// https://leetcode.com/discuss/interview-question/398023/Microsoft-Online-Assessment-Questions
// https://leetcode.com/problems/meeting-rooms-ii/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  // let totalRooms = 1;
  let queue = new PriorityQueue();

  for (let i = 0; i < intervals.length; i++) {
    let startTime = intervals[i][0];
    if (startTime >= queue.min())
      queue.dequeue();
    queue.enqueue(intervals[i][1]);
  }

  return queue.size();
};

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(val) {
    let queue = this.queue;

    queue.push(val);
    let currIdx = queue.length - 1;
    let currVal = queue[currIdx];

    while (currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1) / 2);
      let parentVal = queue[parentIdx];

      if (currVal >= parentVal)
        break;
      [queue[parentIdx], queue[currIdx]] = [currVal, parentVal];
      currIdx = parentIdx;
    }
  }

  dequeue() {
    let queue = this.queue;

    let currIdx = 0
    let currVal = queue.pop();
    if (queue.length === 0)
      return;

    queue[currIdx] = currVal;

    while (true) {
      let [leftIdx, rightIdx] = [2 * currIdx + 1, 2 * currIdx + 2];
      let [leftVal, rightVal] = [null, null];
      let swapIdx = null;

      if (leftIdx < queue.length) {
        leftVal = queue[leftIdx];
        swapIdx = leftVal < currVal ? leftIdx : null;
      }

      if (rightIdx < queue.length) {
        rightVal = queue[rightIdx];
        if (swapIdx === null)
          swapIdx = rightVal < currVal ? rightIdx : null;
        else
          swapIdx = rightVal < leftVal ? rightIdx : swapIdx;
      }

      if (!swapIdx)
        break;
      [queue[currIdx], queue[swapIdx]] = [queue[swapIdx], queue[currIdx]];
      currIdx = swapIdx
    }
  }

  min() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }
}