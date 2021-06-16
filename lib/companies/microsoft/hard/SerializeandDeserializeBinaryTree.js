// https://leetcode.com/explore/interview/card/microsoft/51/design/201/
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
  function postOrder(node) {
    if (!node) return '#';
    let left = postOrder(node.left);
    let right = postOrder(node.right);
    return left + ',' + right + ',' + node.val;
  }
  return postOrder(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let dataArr = data.split(',');
  function postOrder(dataArr) {
    if (dataArr.length === 0) return null;
    let val = dataArr.pop();
    if (val === '#')
      return null;

    let res = new TreeNode(parseInt(val));
    res.right = postOrder(dataArr);
    res.left = postOrder(dataArr);
    return res;

  }
  let res = postOrder(dataArr);
  return res;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */