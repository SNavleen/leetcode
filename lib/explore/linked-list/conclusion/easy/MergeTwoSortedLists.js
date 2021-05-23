// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1227/
// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let output = new ListNode(-1);
  let head = output;
  while (l1 && l2) {
    if (l1.val <= l2.val) [head.next, l1] = [l1, l1.next];
    else if (l2.val < l1.val) [head.next, l2] = [l2, l2.next];
    head = head.next;
  }
  if (!l1) head.next = l2;
  else if (!l2) head.next = l1;

  return output.next;
};