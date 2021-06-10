// https://leetcode.com/explore/interview/card/microsoft/47/sorting-and-searching/195/
// https://leetcode.com/problems/search-a-2d-matrix-ii/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length - 1;
  if (matrix[0].length === 0) return false;
  const n = matrix[0].length - 1;
  let [row, col] = [0, n];
  while (row <= m && col >= 0) {
    let expected = matrix[row][col];
    if (expected === target) return true;
    else if (expected > target) col--;
    else row++;
  }
  return false;
};