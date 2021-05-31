// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/932/
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function dfs(node) {
    if (!node) return null;
    if (node === p || node === q) return node;

    let left = dfs(node.left);
    let right = dfs(node.right);

    let out = left && right ? node : left || right;
    return out;
  }
  return dfs(root);
};