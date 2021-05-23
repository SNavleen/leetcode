// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1295/
// https://leetcode.com/problems/rotate-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

  if (!head || !head.next || k === 0) return head;

  let len = 1;
  let curr = head;

  while (curr.next) {
    curr = curr.next;
    len++;
  }
  curr.next = head;
  curr = curr.next;

  let itter = len - k % len - 1;
  while (itter--) {
    curr = curr.next;
  }
  head = curr.next;
  curr.next = null;
  return head;
};
