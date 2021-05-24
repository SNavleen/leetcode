// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/929/
// https://leetcode.com/problems/binary-tree-inorder-traversal/
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
var inorderTraversal = function (root, res = []) {
  if (!root) return [];
  if (root.left) inorderTraversal(root.left, res);
  res.push(root.val);
  if (root.right) inorderTraversal(root.right, res);

  return res;
};