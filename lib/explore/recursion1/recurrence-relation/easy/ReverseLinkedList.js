// https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/2378/
// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let start = head;
  function recurse(head) {
    if (!head || !head.next) {
      start = head
      return head;
    }
    let prev = recurse(head.next);
    prev.next = head;
    head.next = null;
    return prev.next;
  }
  recurse(start);
  return start;
};