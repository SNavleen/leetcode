// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/930/
// https://leetcode.com/problems/binary-tree-postorder-traversal/
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
var postorderTraversal = function (root, res = []) {
  if (!root) return [];
  if (root.left) postorderTraversal(root.left, res);
  if (root.right) postorderTraversal(root.right, res);
  res.push(root.val);
  return res;
};