// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/
// https://leetcode.com/problems/swap-nodes-in-pairs/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
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
var swapPairs = function (head) {
  function swap(head) {
    if (!head) return null;
    if (!head.next) return head;

    head.next.next = swap(head.next.next);

    let tmpHead = head;
    let tmpNextHead = head.next;
    tmpHead.next = tmpNextHead.next;
    tmpNextHead.next = tmpHead;
    head = tmpNextHead;
    return head;
  }
  return swap(head);
};