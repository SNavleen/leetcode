// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1229/
// https://leetcode.com/problems/copy-list-with-random-pointer/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  let curr = head;
  while (curr) {
    const node = new Node(curr.val, curr.next, null)
    curr.next = node;
    curr = curr.next.next;
  }

  curr = head;
  while (curr) {
    curr.next.random = curr.random ? curr.random.next : null;
    curr = curr.next.next;
  }

  let newHead = head.next;
  let start = newHead;
  curr = head;
  while (curr) {
    curr.next = curr.next.next
    start.next = start.next ? start.next.next : null;
    curr = curr.next;
    start = start.next;
  }
  return newHead;
};