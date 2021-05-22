// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1214/
// https://leetcode.com/problems/linked-list-cycle-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let [slow, fast] = [head, head];
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  if (!fast || !fast.next) return null;

  let curr = head;
  while (curr !== fast) [curr, fast] = [curr.next, fast.next];
  return fast;
};