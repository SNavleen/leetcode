// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/995/
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  return JSON.stringify(dfsPreOrder(root, []));

  function dfsPreOrder(node, res = []) {
    if (!node) {
      res.push(null);
    } else {
      res.push(node.val);
      dfsPreOrder(node.left, res);
      dfsPreOrder(node.right, res);
    }
    return res;
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  return dfsPreOrder(JSON.parse(data));
  function dfsPreOrder(data, node = null) {
    if (data.length === 0) return null;

    let val = data.shift();
    if (val === null) return null;

    node = new TreeNode(val);
    node.left = dfsPreOrder(data, node.left);
    node.right = dfsPreOrder(data, node.right);

    return node;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */