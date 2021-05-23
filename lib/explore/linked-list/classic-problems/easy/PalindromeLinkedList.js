// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1209/
// https://leetcode.com/problems/palindrome-linked-list/
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
function reverseList(head) {
  let [prev, next] = [null, null];
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return false;
  if (!head.next) return true;

  // Find the middle
  let [slow, fast] = [head, head];
  while (slow && fast && fast.next) [slow, fast] = [slow.next, fast.next.next];

  // Reverse slow list
  let curr = head;
  let reversedSlow = reverseList(slow);
  while (reversedSlow) {
    if (curr.val !== reversedSlow.val) return false;
    curr = curr.next;
    reversedSlow = reversedSlow.next;
  }
  return true;
};