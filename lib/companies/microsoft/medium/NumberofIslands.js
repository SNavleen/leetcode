// https://leetcode.com/explore/interview/card/microsoft/31/trees-and-graphs/185/
// https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let cLen = grid.length;
  let rLen = grid[0].length;
  let total = 0;
  for (let c = 0; c < cLen; c++) {
    for (let r = 0; r < rLen; r++) {
      if (grid[c][r] === '1') {
        total++;
        dfs(c, r);
      }
    }
  }

  function dfs(c, r) {
    if (grid[c][r] === '0') return;
    grid[c][r] = '0';
    if (c > 0) dfs(c - 1, r);
    if (c < cLen - 1) dfs(c + 1, r);
    if (r > 0) dfs(c, r - 1);
    if (r < rLen - 1) dfs(c, r + 1);
    return;
  }
  return total;
};
