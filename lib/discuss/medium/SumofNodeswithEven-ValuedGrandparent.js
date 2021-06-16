// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
// https://leetcode.com/discuss/interview-question/686189/Microsoft-or-Onsite-or-Minimal-Bus
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
var sumEvenGrandparentV1 = function (root) {
  function dfs(node) {
    let total = 0;
    if (!node) return total;
    if (node.val % 2 === 0) total += getGrandKidsTotal(node);
    total += dfs(node.left);
    total += dfs(node.right);
    return total;
  }
  return dfs(root);
};

function getGrandKidsTotal(node) {
  let total = 0;
  if (node.left && node.left.left) total += node.left.left.val;
  if (node.left && node.left.right) total += node.left.right.val;
  if (node.right && node.right.left) total += node.right.left.val;
  if (node.right && node.right.right) total += node.right.right.val;

  return total;
}

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
var sumEvenGrandparentV2 = function (root) {
  let sum = 0;
  dfs(root, 1, 1);
  return sum;
  // T.C: O(N)
  // S.C: O(H)
  function dfs(root, parent, grandparent) {
    if (!root) {
      return;
    }
    if (grandparent % 2 === 0) {
      sum += root.val;
    }
    dfs(root.left, root.val, parent);
    dfs(root.right, root.val, parent);
  }
};