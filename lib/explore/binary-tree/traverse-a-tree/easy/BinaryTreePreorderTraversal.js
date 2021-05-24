// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/
// https://leetcode.com/problems/binary-tree-preorder-traversal/
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
 * @param {number[]} res
 * @return {number[]}
 */
var preorderTraversal = function (root, res = []) {
  if (!root) return [];

  res.push(root.val);
  if (root.left) preorderTraversal(root.left, res);
  if (root.right) preorderTraversal(root.right, res);

  return res
};