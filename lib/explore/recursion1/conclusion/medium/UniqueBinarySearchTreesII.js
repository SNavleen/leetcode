// https://leetcode.com/explore/learn/card/recursion-i/253/conclusion/2384/
// https://leetcode.com/problems/unique-binary-search-trees-ii/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  return recur(1, n);

  function recur(start, end) {
    if (start > end) return [null];
    let res = [];

    for (let i = start; i <= end; i++) {
      let left = recur(start, i - 1);
      let right = recur(i + 1, end);

      for (let l of left) {
        for (let r of right) {
          let root = new TreeNode(i);
          root.left = l;
          root.right = r;
          res.push(root);
        }
      }
    }
    return res;
  }
};