// https://leetcode.com/problems/find-median-from-data-stream/
class Heap {
  constructor() {
    this.heap = []
  }

  insert(val, isMin) {
    let heap = this.heap;

    heap.push(val);
    let currIdx = heap.length - 1;
    let currVal = heap[currIdx];

    while (currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1) / 2);
      let parentVal = heap[parentIdx];

      if (isMin && currVal > parentVal) break;
      else if (!isMin && currVal < parentVal) break;

      [heap[currIdx], heap[parentIdx]] = [parentVal, currVal];
      currIdx = parentIdx;
    }
  }

  remove(isMin) {
    let heap = this.heap;

    let currIdx = 0;
    let currVal = heap.pop();
    if (this.isEmpty())
      return [];
    heap[currIdx] = currVal;

    while (true) {
      let [leftIdx, rightIdx] = [2 * currIdx + 1, 2 * currIdx + 2];
      let [leftVal, rightVal] = [null, null];
      let swapIdx = null;

      if (leftIdx < this.size()) {
        leftVal = heap[leftIdx];

        if (isMin) {
          swapIdx = leftVal < currVal ? leftIdx : swapIdx;
        } else {
          swapIdx = leftVal > currVal ? leftIdx : swapIdx;
        }

      }

      if (rightIdx < this.size()) {
        rightVal = heap[rightIdx];

        if (isMin) {
          if ((swapIdx === null && rightVal < currVal) || (swapIdx !== null && rightVal < leftVal))
            swapIdx = rightIdx;
        } else {
          if ((swapIdx === null && rightVal > currVal) || (swapIdx !== null && rightVal > leftVal))
            swapIdx = rightIdx;
        }
      }

      if (swapIdx === null)
        break;

      [heap[currIdx], heap[swapIdx]] = [heap[swapIdx], heap[currIdx]];
      currIdx = swapIdx;
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0 ? true : false;
  }

  top() {
    return this.heap[0] || null;
  }
}
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.loHeap = new Heap(); // Max Heap
  this.hiHeap = new Heap(); // Min Heap
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let lo = this.loHeap;
  let hi = this.hiHeap;
  lo.insert(num);

  hi.insert(lo.top(), true);
  lo.remove();

  if (lo.size() < hi.size()) {
    lo.insert(hi.top());
    hi.remove(true);
  }
  return;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  // console.log(this.loHeap.size() > this.hiHeap.size() ? this.loHeap.top() : (this.loHeap.top() + this.hiHeap.top()) / 2);
  return this.loHeap.size() > this.hiHeap.size() ? this.loHeap.top() : (this.loHeap.top() + this.hiHeap.top()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */