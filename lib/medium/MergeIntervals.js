// https://leetcode.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort(function (a, b) {
    return a[0] - b[0]
  });

  let ans = [];
  let res = [];
  let maxHeap = new Heap();
  for (let i = 0; i < intervals.length; i++) {
    let startTime = intervals[i][0];
    let endTime = intervals[i][1];

    if (startTime > maxHeap.head()) {
      ans.push(maxHeap.head());
    }

    maxHeap.add(endTime);

    if (ans.length === 2) {
      res.push(ans);
      ans = [];
    }

    if (ans.length === 0)
      ans.push(startTime);
  }
  ans.push(maxHeap.head());
  res.push(ans);
  return res;
};

class Heap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    let heap = this.heap;

    heap.push(val);
    let currIdx = heap.length - 1;
    let currVal = heap[currIdx];

    while (currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1) / 2);
      let parentVal = heap[parentIdx];

      if (currVal < parentVal)
        break;
      [heap[currIdx], heap[parentIdx]] = [parentVal, currVal];
      currIdx = parentIdx;
    }
  }

  remove() {
    let heap = this.heap;

    let currIdx = 0;
    let currVal = heap.pop();
    if (heap.length === 0) return;
    heap[currIdx] = currVal;

    while (true) {
      let [leftIdx, rightIdx] = [2 * currIdx + 1, 2 * currIdx + 2];
      let [leftVal, rightVal] = [null, null];
      let swapIdx = null;

      if (leftIdx < heap.lenght) {
        leftVal = heap[leftIdx];
      }

      if (rightIdx < heap.lenght) {
        rightVal = heap[rightIdx];
      }

      swapIdx = leftVal > currVal ? leftIdx : swapIdx;
      swapIdx = rightVal > currVal ? rightIdx : swapIdx;
      swapIdx = rightVal > leftVal ? rightIdx : swapIdx;

      if (swapIdx === null) break;
      [heap[currIdx], heap[swapIdx]] = [heap[swapIdx], heap[currIdx]];
      currIdx = swapIdx;
    }
  }

  head() {
    return this.heap[0];
  }
}