// https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/1380/
// https://leetcode.com/problems/number-of-islands/


const [LAND, WATER] = ['1', '0'];
let [r, c] = [0, 0];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let total = 0;
  [r, c] = [grid.length, grid[0].length];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === LAND) {
        ++total;
        dfs(grid, [[i, j]]);
      }
    }
  }
  return total;
};

/**
 * @param {character[][]} grid
 * @param {Integer[][]} idxStack
 */
function dfs(grid, idxStack) {
  if (idxStack.length === 0) return;

  let rIdx = idxStack[idxStack.length - 1][0];
  let cIdx = idxStack[idxStack.length - 1][1];
  grid[rIdx][cIdx] = WATER;

  if (rIdx + 1 < r && grid[rIdx + 1][cIdx] === '1') {
    idxStack.push([rIdx + 1, cIdx])
    dfs(grid, idxStack);
  }
  if (rIdx - 1 > -1 && grid[rIdx - 1][cIdx] === '1') {
    idxStack.push([rIdx - 1, cIdx])
    dfs(grid, idxStack);
  }
  if (cIdx + 1 < c && grid[rIdx][cIdx + 1] === '1') {
    idxStack.push([rIdx, cIdx + 1])
    dfs(grid, idxStack);
  }
  if (cIdx - 1 > -1 && grid[rIdx][cIdx - 1] === '1') {
    idxStack.push([rIdx, cIdx - 1])
    dfs(grid, idxStack);
  }

  idxStack.pop();
  return;
}