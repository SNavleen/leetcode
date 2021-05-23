// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1207/
// https://leetcode.com/problems/remove-linked-list-elements/
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // The linked list may be empty.
  if (head === null) {
    return head;
  }

  let start = new ListNode(-1, head);
  let prev = start;
  let curr = head;

  while (curr) {
    if (curr.val === val) prev.next = curr.next;
    else prev = curr;
    curr = curr.next;
  }
  return start.next;
};