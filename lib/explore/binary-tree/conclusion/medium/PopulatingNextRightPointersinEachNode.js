// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/994/
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  function traverse(queue) {
    if (queue.length === 0) return null;

    let dequeue = [];

    while (queue.length !== 0) {
      let node = queue.shift();
      if (node) {
        node.next = queue[0] || null;
        dequeue.push(node);
      }
    }
    while (dequeue.length !== 0) {
      let node = dequeue.shift();
      if (node) {
        queue.push(node.left || null);
        queue.push(node.right || null);
      }
    }
    traverse(queue);
  }
  traverse([root]);
  return root;
};
