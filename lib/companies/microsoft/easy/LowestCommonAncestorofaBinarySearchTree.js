// https://leetcode.com/explore/interview/card/microsoft/31/trees-and-graphs/182/
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
  function lca(node) {
    if (!node) return null;
    if (node.val === p.val || node.val === q.val) return node;

    let left = lca(node.left);
    let right = lca(node.right);

    let val = left && right ? node : left || right;
    return val;
  }
  return lca(root);
};