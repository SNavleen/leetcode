// https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

  function pascal(row) {
    if (row === 1) return [[1]];
    let pascalTri = pascal(row - 1);
    let prevRow = pascalTri[row - 2];
    let newRow = Array(row);
    newRow[0] = 1;
    newRow[row - 1] = 1;

    for (let i = 1; i <= row - 2; i++) {
      newRow[i] = prevRow[i - 1] + prevRow[i];
    }

    pascalTri[row - 1] = newRow;
    return pascalTri;
  }
  return pascal(numRows);
};