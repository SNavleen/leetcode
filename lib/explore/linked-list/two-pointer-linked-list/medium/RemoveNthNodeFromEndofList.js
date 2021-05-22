// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1296/
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * This version uses two passes
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEndV1 = function (head, n) {
  if (!head) return null;
  if (!head.next && n === 1) return null;
  let newNode = new ListNode(-1, head);
  let total = 1;

  while (head) {
    total++;
    head = head.next;
  }

  let diff = total - n;
  head = newNode.next;
  let returnNode = newNode;
  while (--diff) {
    head = head.next;
    newNode = newNode.next;
  }

  newNode.next = head.next;
  return returnNode.next;
};

/**
 * This version uses 1 pass but using 2 pointers
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEndV2 = function (head, n) {
  if (!head) return null;
  if (!head.next && n === 1) return null;

  let start = new ListNode(-1, head);
  let [slow, fast] = [start, start];
  while (n--) fast = fast.next;
  while (fast && fast.next) [slow, fast] = [slow.next, fast.next];

  slow.next = slow.next.next;
  return start.next;
};
