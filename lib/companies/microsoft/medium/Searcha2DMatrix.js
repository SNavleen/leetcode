// https://leetcode.com/explore/interview/card/microsoft/47/sorting-and-searching/154/
// https://leetcode.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rLen = matrix.length;
  const cLen = matrix[0].length;
  return bs(0, (rLen * cLen) - 1, target, matrix);;
};

function bs(low, high, target, matrix) {
  if (low > high) return false;

  let mid = Math.floor((low + high) / 2);
  let row = Math.floor(mid / matrix[0].length);
  let col = mid % matrix[0].length;
  if (target > matrix[row][col])
    return bs(low + 1, high, target, matrix);
  else if (target < matrix[row][col])
    return bs(low, high - 1, target, matrix)
  else
    return true;
}