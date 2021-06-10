// https://leetcode.com/explore/interview/card/microsoft/32/linked-list/209/
// https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let combinedList = [];
  let newList = new ListNode(-1);
  let head = newList;
  for (let l of lists) {
    while (l) {
      combinedList.push(l.val);
      l = l.next;
    }
  }

  combinedList.sort((a, b) => a - b);

  for (let val of combinedList) {
    head.next = new ListNode(val);
    head = head.next;
  }
  return newList.next;
};