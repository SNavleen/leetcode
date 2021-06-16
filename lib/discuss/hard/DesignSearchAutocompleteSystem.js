// https://leetcode.com/problems/design-search-autocomplete-system/
// https://leetcode.com/discuss/interview-question/685338/Microsoft-or-Onsite-or-Design-the-T9-predictive-text-algorithm-and-system
class Trie {
  constructor() {
    this.kids = {};
    this.counter = 0;
    this.sentence = null;
  }

  insert(sentence, count) {
    let trie = this;
    for (const char of sentence) {
      if (!trie.kids[char])
        trie.kids[char] = new Trie();
      trie = trie.kids[char];
    }
    trie.counter = count;
    trie.sentence = sentence;
  }

  getSubTrie(prefix) {
    let trie = this;
    if (!trie.kids[prefix]) trie.kids[prefix] = new Trie();
    return trie.kids[prefix];
  }

  getSentences() {
    let trie = this;
    let output = [];
    function dfs(trie) {
      if (!trie) return;
      if (trie.sentence) {
        output.push({ 'sentence': trie.sentence, 'counter': trie.counter });
        // trie.counter += 1;
      }
      let listOfKids = Object.keys(trie.kids);
      for (let key of listOfKids) {
        dfs(trie.kids[key]);
      }
    }

    dfs(trie);
    return output;
  }
}
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
  this.trie = new Trie();
  this.currTrie = this.trie;
  this.currSentence = ''

  for (let i = 0; i < sentences.length; i++) {
    this.trie.insert(sentences[i], times[i]);
  }
};

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
  if (c === '#') {
    this.currTrie.sentence = this.currSentence;
    this.currTrie.counter += 1;
    this.currTrie = this.trie;
    this.currSentence = '';
    return [];
  }

  this.currSentence += c;
  this.currTrie = this.currTrie.getSubTrie(c);

  // if(!this.currTrie) return [];
  let listOfSentencesObj = this.currTrie.getSentences();

  listOfSentencesObj.sort((a, b) => {
    if (a.counter < b.counter) {
      return 1;
    } else if (a.counter === b.counter) {
      if (a.sentence < b.sentence)
        return -1;
      else if (a.sentence === b.sentence)
        return 0;
      else
        return 1;
    } else {
      return -1;
    }
  });

  let sentences = [];
  for (let i = 0; i < 3; i++) {
    if (listOfSentencesObj[i])
      sentences.push(listOfSentencesObj[i].sentence);
  }
  return sentences;
};

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */