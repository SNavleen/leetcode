// https://leetcode.com/explore/learn/card/queue-stack/239/conclusion/1388/
// https://leetcode.com/problems/01-mat/
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let countMat = Array.from({ length: mat.length }, () => []);
  let queue = [];
  let distance = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) queue.push([i, j]);
    }
  }

  while (queue.length) {
    const next = [];

    for (let [r, c] of queue) {
      if (countMat[r][c] === undefined) {
        countMat[r][c] = distance;

        // add neighboring nodes to the queue if they are undefined
        if (r - 1 >= 0 && countMat[r - 1][c] === undefined) next.push([r - 1, c]); // up
        if (r + 1 < mat.length && countMat[r + 1][c] === undefined) next.push([r + 1, c]); // down
        if (c + 1 < mat[0].length && countMat[r][c + 1] === undefined) next.push([r, c + 1]); // right
        if (c - 1 >= 0 && countMat[r][c - 1] === undefined) next.push([r, c - 1]); // left
      }
    }
    distance++;
    queue = next;
  }
  return countMat;
};