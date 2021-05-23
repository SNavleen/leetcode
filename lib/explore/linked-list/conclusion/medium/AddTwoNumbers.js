// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1228/
// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let output = new ListNode(-1);
  let head = output;
  let carryOver = 0;

  while (l1 || l2) {
    let [l1Val, l2Val] = [0, 0];
    if (l1) l1Val = l1.val;
    if (l2) l2Val = l2.val;

    let newVal = l1Val + l2Val + carryOver;
    if (newVal >= 10) {
      carryOver = (newVal - (newVal % 10)) / 10;
      newVal = newVal % 10;
    } else {
      carryOver = 0;
    }

    let node = new ListNode(newVal);
    head.next = node;
    head = head.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carryOver !== 0) head.next = new ListNode(carryOver);
  return output.next;
};
