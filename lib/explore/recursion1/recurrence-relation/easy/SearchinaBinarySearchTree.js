// https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/3233/
// https://leetcode.com/problems/search-in-a-binary-search-tree/
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  function check(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    if (val > root.val) return check(root.right, val);
    else return check(root.left, val);
  }
  return check(root, val);
};