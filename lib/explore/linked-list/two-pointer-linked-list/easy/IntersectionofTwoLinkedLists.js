// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/
// https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * This version adds a new property (visited) to the Node object
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeV1 = function (headA, headB) {
  if (!headA || !headB) return null;

  while (headA || headB) {
    if (headA !== null) {
      if (headA.visited) return headA;
      headA.visited = true;
      if (headA.next) headA = headA.next;
      else headA = null;
    }

    if (headB !== null) {
      if (headB.visited) return headB;
      headB.visited = true;
      if (headB.next) headB = headB.next;
      else headB = null;
    }
  }
  return null;
};

/**
 * This version adds a new property (visited) and uses recursion
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeV2 = function (headA, headB) {
  if (headA !== null) {
    if (headA.visited === true) return headA;
    headA.visited = true;
  }
  if (headB !== null) {
    if (headB.visited === true) return headB;
    headB.visited = true;
  }

  let newHeadA = null;
  let newHeadB = null;

  if (headA !== null && headA.next !== null) newHeadA = headA.next;
  if (headB !== null && headB.next !== null) newHeadB = headB.next;

  if (newHeadA === null && newHeadB === null) return null;

  return getIntersectionNode(newHeadA, newHeadB);
};

/**
 * This version uses 2 pointers
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeV3 = function (headA, headB) {
  if (!headA || !headB) return null;

  let startHeadA = headA;
  let startHeadB = headB;

  while (headA || headB) {
    if (!headA) headA = startHeadB;
    if (!headB) headB = startHeadA;

    if (headA === headB) return headA

    headA = headA.next;
    headB = headB.next;
  }
  return null;
};