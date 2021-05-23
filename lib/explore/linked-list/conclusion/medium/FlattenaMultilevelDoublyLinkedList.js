// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1225/
// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * This version does not use recursion
 * @param {Node} head
 * @return {Node}
 */
var flattenV1 = function (head) {
  if (!head) return head;

  let tmpHead = new Node(-1, null, null, null);
  let curr = tmpHead;
  let holdObject = {};
  let numberOfHolds = 0;

  while (head || numberOfHolds > 0) {
    while (head) {
      if (head.child) {
        holdObject[numberOfHolds++] = head.next;
        head.next = head.child;
        head.child.prev = head;
        head.child = null;
      }
      curr.next = head;
      curr.next.prev = curr;
      head = head.next;
      curr = curr.next
    }

    if (numberOfHolds > 0) {
      head = holdObject[--numberOfHolds];
      delete holdObject[numberOfHolds];
    }
  }

  tmpHead.next.prev = null;
  return tmpHead.next;
};

/**
 * This version uses recursion
 * @param {Node} head
 * @return {Node}
 */
var flattenV2 = function (head) {
  if (!head) return head;
  let tmpHead = new Node(-1, null, null, null);
  let prev = tmpHead;

  function recurse(prev, curr) {
    if (!curr) return prev;

    curr.prev = prev;
    prev.next = curr;

    const tmpNode = curr.next;
    const mergeChild = recurse(curr, curr.child);

    curr.child = null;

    return recurse(mergeChild, tmpNode);
  }
  recurse(prev, head);

  tmpHead.next.prev = null;
  return tmpHead.next;
};