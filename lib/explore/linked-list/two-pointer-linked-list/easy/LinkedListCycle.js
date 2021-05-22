// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1212/
// https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * This version adds a property to the node called visited
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleV1 = function (head) {
  while (head) {
    if (head.visited) return true;
    head.visited = true;
    head = head.next;
  }
  return false;
};

/**
 * This version uses double pointer
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleV2 = function (head) {
  if (!head || !head.next) return false;
  let [slow, fast] = [head, head];
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};