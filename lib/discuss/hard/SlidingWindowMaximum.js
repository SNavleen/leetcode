// https://leetcode.com/problems/sliding-window-maximum/
// https://leetcode.com/discuss/interview-question/686189/Microsoft-or-Onsite-or-Minimal-Bus
class Node {
  constructor(val, idx) {
    this.val = val;
    this.idx = idx;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  removeVal(val) {
    let heap = this.heap;
    let lastVal = heap.pop();
    heap[0] = lastVal;

    let currIdx = 0;
    let currVal = heap[0];

    while (true) {
      let [leftIdx, rightIdx] = [2 * currIdx + 1, 2 * currIdx + 2];
      let [leftVal, rightVal] = [null, null];
      let swapIdx = null;

      if (leftIdx < heap.length) {
        leftVal = heap[leftIdx];
        swapIdx = leftVal.val > currVal.val ? leftIdx : null;
      }
      if (rightIdx < heap.length) {
        rightVal = heap[rightIdx];
        if ((swapIdx === null && rightVal.val > currVal.val) ||
          (swapIdx !== null && rightVal.val > leftVal.val)) {
          swapIdx = rightIdx;
        }
      }

      if (!swapIdx) break;
      [heap[currIdx], heap[swapIdx]] = [heap[swapIdx], currVal];
      currIdx = swapIdx;
    }
  }

  addVal(val, idx) {
    let heap = this.heap;
    heap.push(new Node(val, idx));

    let currIdx = heap.length - 1;
    let currVal = heap[currIdx];

    while (currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1) / 2);
      let parentVal = heap[parentIdx];
      if (parentVal.val <= currVal.val) {
        [heap[parentIdx], heap[currIdx]] = [currVal, parentVal];
        currIdx = parentIdx;
      } else break;
    }
  }

  max() {
    return this.heap[0];
  }
}
/**
 * This version uses heap
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindowV1 = function (nums, k) {
  let heap = new MaxHeap();
  let [start, end] = [-1, k - 1];
  let ans = [];

  for (let i = 0; i < k; i++) {
    heap.addVal(nums[i], i);
  }
  while (end < nums.length) {
    start++;
    end++;
    let max = heap.max();
    while (true) {
      if (max.idx < start)
        heap.removeVal(nums[start]);
      else break;
      max = heap.max();
    }
    ans.push(max.val);
    heap.addVal(nums[end], end);
  }
  return ans;
};

/**
 * This version uses deque
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindowV2 = function (nums, k) {
  let dq = [];
  let ans = [];

  for (let i = 0; i < k; i++) {
    cleanDQ(dq, nums, 0, i);
    dq.push(i);
  }
  ans.push(nums[dq[0]]);

  for (let end = k; end < nums.length; end++) {
    let start = end - k + 1;
    cleanDQ(dq, nums, start, end);
    dq.push(end);
    ans.push(nums[dq[0]]);
  }
  return ans;
};

function cleanDQ(dq, nums, start, end) {
  while (dq.length > 0 && dq[0] < start)
    dq.shift();
  while (dq.length > 0 && nums[dq[dq.length - 1]] < nums[end])
    dq.pop();
}