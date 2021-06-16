// https://leetcode.com/problems/search-suggestions-system/
class Trie {
  constructor() {
    this.kids = {};
    this.words = [];
  }

  insert(word) {
    let trie = this;
    for (let w of word) {
      if (!trie.kids[w])
        trie.kids[w] = new Trie();

      trie.kids[w].words.push(word);
      trie = trie.kids[w];
    }
  }

  getWords(prefix) {
    let trie = this;
    for (let p of prefix) {
      if (!trie.kids[p])
        return [];
      trie = trie.kids[p];
    }
    return trie.words.sort().slice(0, 3);
  }
}
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  let trie = new Trie();
  for (let product of products)
    trie.insert(product);

  let output = [];
  let chars = '';
  for (let c of searchWord) {
    chars += c;
    output.push(trie.getWords(chars));
  }

  return output;
};