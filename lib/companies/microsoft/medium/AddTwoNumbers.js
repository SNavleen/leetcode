// https://leetcode.com/explore/interview/card/microsoft/32/linked-list/170/
// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let outLN = new ListNode(-1);
  let head = outLN;
  let carryOver = 0;
  while (l1 && l2) {
    let total = l1.val + l2.val + carryOver;
    [total, carryOver] = checkCarryOver(total, carryOver);
    head.next = new ListNode(total);
    head = head.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    let total = l1.val + carryOver;
    [total, carryOver] = checkCarryOver(total, carryOver);
    head.next = new ListNode(total);
    head = head.next;
    l1 = l1.next;
  }
  while (l2) {
    let total = l2.val + carryOver;
    [total, carryOver] = checkCarryOver(total, carryOver);
    head.next = new ListNode(total);
    head = head.next;
    l2 = l2.next;
  }

  if (carryOver !== 0) {
    head.next = new ListNode(carryOver);
    head = head.next;
  }


  head = head.next;
  return outLN.next;
};

function checkCarryOver(total, carryOver) {
  if (total > 9) {
    carryOver = Math.floor(total / 10);
    total = total % 10;
  } else carryOver = 0;
  return [total, carryOver];
}