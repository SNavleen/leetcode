// https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
// https://leetcode.com/problems/check-if-n-and-its-double-exist/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let hashMap = new Map();;

  for (let i = 0; i < arr.length; i++) {
    const currValue = arr[i];

    if (hashMap.has(currValue)) {
      return true
    }
    hashMap.set(currValue / 2, currValue);
    hashMap.set(currValue * 2, currValue);
  }

  return false;
};