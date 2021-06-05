// https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/3234/
// https://leetcode.com/problems/pascals-triangle-ii/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  function pascal(row) {
    if (row === 0) return [1];
    let prevRow = pascal(row - 1);
    let newRow = Array(row);
    newRow[0] = 1;
    newRow[row] = 1;

    for (let i = 1; i <= row - 1; i++) {
      newRow[i] = prevRow[i - 1] + prevRow[i];
    }

    return newRow;
  }
  return pascal(rowIndex);
};