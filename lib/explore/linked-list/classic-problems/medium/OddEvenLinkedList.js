// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1208/
// https://leetcode.com/problems/odd-even-linked-list/
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
var oddEvenList = function (head) {
  if (!head) return null;

  let [odd, even] = [new ListNode(), new ListNode()];
  let [localOdd, localEven] = [odd, even];
  let count = 1;

  while (head) {
    let node = new ListNode(head.val, null);
    if (count % 2 === 0) {
      localEven.next = node;
      localEven = localEven.next;
    } else {
      localOdd.next = node;
      localOdd = localOdd.next;
    }
    head = head.next;
    count++;
  }

  localOdd.next = even.next;
  return odd.next;
};