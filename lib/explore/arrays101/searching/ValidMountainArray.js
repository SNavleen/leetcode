// https://leetcode.com/problems/valid-mountain-array/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let maxIndex = null
  for (let i = 1; i <= arr.length - 1; i++) {
    if (maxIndex === null) {
      if (arr[i] < arr[i - 1]) {
        maxIndex = i - 1
      } else if (arr[i] === arr[i - 1]) {
        return false
      }
    } else if (arr[i] >= arr[i - 1]) {
      return false
    }
  }
  return maxIndex > 0 && maxIndex < arr.length - 1
};