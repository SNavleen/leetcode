// https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/538/
// https://leetcode.com/problems/count-univalue-subtrees/
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
var countUnivalSubtrees = function (root) {
  let totalCount = 0;
  function count(root, val) {
    if (!root) return true;
    if (!count(root.left, root.val) | !count(root.right, root.val)) return false;
    totalCount++;
    return root.val === val;
  }
  count(root, 0);
  return totalCount
};