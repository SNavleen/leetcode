// https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/1392/
// https://leetcode.com/problems/clone-graph/
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  let map = new Map();
  function clone(node) {
    if (map.has(node)) return map.get(node);

    const newNode = new Node(node.val);
    map.set(node, newNode);

    for (const nextNode of node.neighbors) {
      newNode.neighbors.push(clone(nextNode));
    }

    return newNode;
  }

  return clone(node);
};