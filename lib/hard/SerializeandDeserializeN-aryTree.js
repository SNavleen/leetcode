// https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  constructor() {
  }

  /** 
   * @param {Node|null} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function (root) {
    if (!root) return '';

    let res = [];
    function dfs(node) {
      if (!node) return;
      res.push(node.val);

      res.push(node.children.length);
      if (node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
          dfs(node.children[i]);
        }
      }
      return res;
    }
    return JSON.stringify(dfs(root));
  };

  /** 
   * @param {string} data 
   * @return {Node|null}
   */
  // Decodes your encoded data to tree.
  deserialize = function (data) {
    if (data === '') return null;
    let nodeList = JSON.parse(data);
    let idx = 0;

    function dfs(list) {
      if (!list.length) return;

      let val = list[idx++];
      let tree = new Node(val, []);
      let numOfKids = list[idx++];
      for (let i = 0; i < numOfKids; i++) {
        tree.children.push((dfs(list)))
      }

      return tree;
    }
    return dfs(nodeList);
  };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));