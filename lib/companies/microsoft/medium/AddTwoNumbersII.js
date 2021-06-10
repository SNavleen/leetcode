// https://leetcode.com/explore/interview/card/microsoft/32/linked-list/205/
// https://leetcode.com/problems/add-two-numbers-ii/
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
  let head = null;
  let carryOver = 0;
  let l1Count = getLength(l1);
  let l2Count = getLength(l2);

  function recur(l1, l2) {
    if (l1Count < l2Count) {
      let next = l1;
      l1 = new ListNode(0, next);
      l1Count++;
    } else if (l1Count > l2Count) {
      let next = l2;
      l2 = new ListNode(0, next);
      l2Count++;
    }

    if (l1 && l2) [head, carryOver] = recur(l1.next, l2.next);
    else return [null, 0];

    let val = l1.val + l2.val + carryOver;
    if (val > 9) {
      carryOver = Math.floor(val / 10);
      val = val % 10;
    } else carryOver = 0;

    let next = head;
    head = new ListNode(val, next);
    return [head, carryOver];
  }
  [head, carryOver] = recur(l1, l2);
  if (carryOver !== 0) {
    let next = head;
    head = new ListNode(carryOver, next);
  }
  return head;
};

function getLength(list) {
  let count = 0;
  while (list) {
    list = list.next;
    count++;
  }
  return count;
}