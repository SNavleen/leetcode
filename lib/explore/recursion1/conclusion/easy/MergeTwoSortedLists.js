// https://leetcode.com/explore/learn/card/recursion-i/253/conclusion/2382/
// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  function f(l1, l2) {
    let node = null;
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val > l2.val) {
      node = new ListNode(l2.val);
      node.next = f(l1, l2.next);
    } else if (l1.val <= l2.val) {
      node = new ListNode(l1.val);
      node.next = f(l1.next, l2);
    }
    return node;
  }
  return f(l1, l2);
};