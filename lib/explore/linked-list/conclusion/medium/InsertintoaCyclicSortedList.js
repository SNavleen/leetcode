// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1226/
// https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  if (!head) {
    head = new Node(insertVal);
    head.next = head;
    return head;
  }
  let curr = head, flag = false;
  while (true) {
    if ((curr.val < insertVal && curr.next.val >= insertVal)
      || (curr.val > curr.next.val && curr.next.val >= insertVal)
      || (curr.val <= insertVal && curr.next.val < curr.val))
      break;

    if (head === curr.next)
      break;

    curr = curr.next;
  }
  curr.next = new Node(insertVal, curr.next);
  return head;
};