// https://leetcode.com/explore/interview/card/microsoft/31/trees-and-graphs/197/
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = [];
  recur(root, 0);
  function recur(node, level) {
    if (!node) return;
    res = saveToResponse(node.val, level, res);
    recur(node.left, level + 1);
    recur(node.right, level + 1);
    return;
  }
  return res;
};

function saveToResponse(val, level, res) {
  if (!res[level]) res[level] = [];
  if (level % 2 === 0) res[level].push(val);
  else res[level].unshift(val);
  return res;
}