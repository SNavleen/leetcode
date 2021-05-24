// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/931/
// https://leetcode.com/problems/binary-tree-level-order-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  return traverseWithCounter(root, 0, []);
};

function traverseWithCounter(root, counter, res) {
  if (!root) return [];
  res[counter] = [...res[counter] ?? [], root.val];
  ++counter;

  if (root.left) traverseWithCounter(root.left, counter, res);
  if (root.right) traverseWithCounter(root.right, counter, res);

  return res;
}