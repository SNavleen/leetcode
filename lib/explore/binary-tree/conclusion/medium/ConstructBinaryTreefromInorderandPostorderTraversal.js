// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/942/
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let treeMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    treeMap.set(inorder[i], i);
  }

  function callDFS(start, end) {
    if (end < start) return null;
    const val = postorder.pop();
    const idx = treeMap.get(val);
    const right = callDFS(idx + 1, end);
    const left = callDFS(start, idx - 1);
    return new TreeNode(val, left, right);
  }
  return callDFS(0, inorder.length - 1);
};