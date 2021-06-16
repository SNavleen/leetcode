// https://leetcode.com/explore/interview/card/microsoft/51/design/892/
// https://leetcode.com/problems/implement-trie-prefix-tree/
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.kids = {};
  this.word = null;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let root = this;
  for (let c of word) {
    if (!root.kids[c])
      root.kids[c] = new Trie();
    root = root.kids[c];
  }
  root.word = word;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let root = this;
  for (let c of word) {
    if (!root.kids[c])
      return false;
    root = root.kids[c];
  }
  if (root.word === word) return true;
  return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let root = this;
  for (let c of prefix) {
    if (!root.kids[c])
      return false;
    root = root.kids[c];
  }
  if (root.kids) return true;
  return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */