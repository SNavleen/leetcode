// https://leetcode.com/explore/interview/card/microsoft/46/backtracking/256/
// https://leetcode.com/problems/word-search-ii/
/**
 * Version 1 uses backtracking but not tries
 */
const rOffset = [0, 1, 0, -1];
const cOffset = [1, 0, -1, 0];
let rLen, cLen, globalBoard;
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWordsV1 = function (board, words) {
  globalBoard = board;
  rLen = board.length;
  cLen = board[0].length;
  let res = [];
  for (let [ridx, rval] of board.entries()) {
    for (let [cidx, cval] of board[ridx].entries()) {
      for (let word of words) {
        if (cval === word[0]) {
          if (backtrackV1(ridx, cidx, word, 0))
            if (!res.includes(word)) res.push(word);
        }
      }
    }
  }
  return res;
};

function backtrackV1(ridx, cidx, word, idx) {
  if (idx >= word.length) return true;
  if (ridx < 0 || cidx < 0 || ridx === rLen || cidx === cLen || globalBoard[ridx][cidx] != word[idx]) return false;

  let res = false;
  globalBoard[ridx][cidx] = '#';
  for (let i = 0; i < 4; i++) {
    res = backtrackV1(ridx + rOffset[i], cidx + cOffset[i], word, idx + 1);
    if (res) break;
  }
  globalBoard[ridx][cidx] = word[idx];
  return res;
}

/**
 * Version 2 uses backtracking and tries
 */
class Tries {
  constructor() {
    this.children = {};
    this.word = null;
  }
  insertTrie(word) {
    let curr = this;
    for (let w of word) {
      if (!curr.children[w]) curr.children[w] = new Tries();
      curr = curr.children[w];
    }
    curr.word = word;
  }
}

const rOffset = [0, 1, 0, -1];
const cOffset = [1, 0, -1, 0];
let boardG, rLenG, cLenG, resG = [];

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWordsV2 = function (board, words) {
  // create trie
  let trie = new Tries();
  for (let word of words)
    trie.insertTrie(word);

  // backtrack
  rLenG = board.length;
  cLenG = board[0].length;
  boardG = board;
  resG = [];
  for (let [ridx, rval] of board.entries()) {
    for (let [cidx, cval] of board[ridx].entries()) {
      if (trie.children.hasOwnProperty(cval))
        backtrackV2(ridx, cidx, trie);
    }
  }
  return resG;
};

function backtrackV2(ridx, cidx, trie) {
  let char = boardG[ridx][cidx];
  let currTrie = trie.children[char];

  if (currTrie.word != null) {
    resG.push(currTrie.word);
    currTrie.word = null;
  }

  boardG[ridx][cidx] = '#';
  for (let i = 0; i < 4; i++) {
    let newR = ridx + rOffset[i];
    let newC = cidx + cOffset[i];
    if (newR < 0 || newC < 0 || newR >= rLenG || newC >= cLenG) continue;
    if (currTrie.children.hasOwnProperty(boardG[newR][newC])) backtrackV2(newR, newC, currTrie);
  }
  boardG[ridx][cidx] = char;
  return;
}