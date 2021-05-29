// https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/1374/
// https://leetcode.com/problems/number-of-islands/

const [LAND, WATER] = ['1', '0'];
let [m, n] = [0, 0];

/**
 * @param {character[][]} grid
 * @param {object[]} queue
 * @update grid
 */
function bfs(grid, queue) {
  while (queue.length !== 0) {
    let { i, j } = queue.shift();
    let val = grid[i][j];
    if (val === WATER) continue;

    if (i + 1 < m) queue.push({ i: i + 1, j: j });
    if (i - 1 >= 0) queue.push({ i: i - 1, j: j });

    if (j + 1 < n) queue.push({ i: i, j: j + 1 });
    if (j - 1 >= 0) queue.push({ i: i, j: j - 1 });

    grid[i][j] = WATER;
  }
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  [m, n] = [grid.length, grid[0].length];
  let totalIslands = 0;

  if (m === 1 && n === 1) {
    return grid[0][0] === LAND ? 1 : 0;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === LAND) {
        ++totalIslands;
        bfs(grid, [{ i, j }]);
      }
    }
  }

  return totalIslands;
};