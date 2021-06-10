// https://leetcode.com/problems/word-search/
let boardG, rLenG, cLenG;
const rOffsets = [0, 1, 0, -1];
const cOffsets = [1, 0, -1, 0];

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  [rLenG, cLenG] = [board.length, board[0].length];
  boardG = board;
  for (let [ridx, r] of board.entries()) {
    for (let [cidx, c] of board[ridx].entries()) {
      if (c === word[0]) {
        if (backtrack(ridx, cidx, word, 0)) return true;
      }
    }
  }

  return false;
};

function backtrack(r, c, word, idx) {
  // bottom case    
  if (idx >= word.length) return true;

  // Check boundaries
  if (r < 0 || r === rLenG || c < 0 || c === cLenG || boardG[r][c] != word[idx]) return false;

  // explore the neighbors in dfs
  let res = false
  // mark path as visited
  boardG[r][c] = '#';
  for (let i = 0; i < 4; i++) {
    res = backtrack(r + rOffsets[i], c + cOffsets[i], word, idx + 1);
    if (res) break;
  }
  boardG[r][c] = word[idx];
  return res;
}
