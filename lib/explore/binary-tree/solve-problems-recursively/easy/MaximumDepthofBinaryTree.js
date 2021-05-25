// https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/535/
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
 * @return {number}
 */
var maxDepth = function (root) {
  return topDown(root, 1);
  return bottomUp(root);
};

var topDown = function (root, depth) {
  if (!root) return depth - 1;
  return Math.max(topDown(root.left, depth + 1), topDown(root.right, depth + 1));
};

var bottomUp = function (root) {
  if (!root) return 0;
  return Math.max(bottomUp(root.left), bottomUp(root.right)) + 1;
};