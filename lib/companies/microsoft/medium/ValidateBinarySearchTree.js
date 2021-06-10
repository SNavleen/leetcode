// https://leetcode.com/explore/interview/card/microsoft/31/trees-and-graphs/152/
// https://leetcode.com/problems/validate-binary-search-tree/
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function checkBST(node, lowerLim, higherLim) {
    if (!node) return true;
    let leftRes = checkBST(node.left, lowerLim, Math.min(node.val, higherLim));
    let rightRes = checkBST(node.right, Math.max(node.val, lowerLim), higherLim);
    if (node.val > lowerLim && node.val < higherLim) return true && leftRes && rightRes;
    else return false;
  }
  let res = checkBST(root, -Infinity, Infinity);
  return res;
};