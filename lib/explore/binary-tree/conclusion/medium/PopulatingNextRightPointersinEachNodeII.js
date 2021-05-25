// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/1016/
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
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
 * This version uses an iterative approach and a queue
 * @param {Node} root
 * @return {Node}
 */
var connectV1 = function (root) {
  function traverse(queue, len) {
    let newLen = 0;
    while (len--) {
      let node = queue.shift();
      node.next = len === 0 ? null : queue[0] || null;
      if (node.left) {
        queue.push(node.left);
        newLen++;
      }
      if (node.right) {
        queue.push(node.right);
        newLen++
      }
    }
    return [queue, newLen];
  }

  if (!root) return null;

  let queue = [root];
  let newLen = 1;

  while (newLen !== 0)
    [queue, newLen] = traverse(queue, newLen);

  return root;
};


/**
 * This version uses recursion and a hash map
 * @param {Node} root
 * @return {Node}
 */
var connectV2 = function (root) {
  let treeMap = new Map();
  function traverse(root, height) {
    if (root) {
      if (treeMap.has(height)) {
        let node = treeMap.get(height);
        node.next = root;
        treeMap.set(height, node.next);
      } else {
        treeMap.set(height, root);
      }

      ++height;
      if (root.left) traverse(root.left, height);
      if (root.right) traverse(root.right, height);
    }
  }
  traverse(root, 0);
  return root;
};