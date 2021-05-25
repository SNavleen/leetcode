// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/943/
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let treeMap = new Map();

  for (let i = 0; i < inorder.length; i++) {
    treeMap.set(inorder[i], i);
  }

  function callDPS(start, end) {
    if (end < start) return null;
    const val = preorder.shift();
    const idx = treeMap.get(val);
    const left = callDPS(start, idx - 1);
    const right = callDPS(idx + 1, end);
    return new TreeNode(val, left, right);
  }
  return callDPS(0, inorder.length - 1);
};