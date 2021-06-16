// https://leetcode.com/explore/interview/card/microsoft/48/others/194/
// https://leetcode.com/problems/find-the-celebrity/
/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let possCeleb = 0;
    for (let currCeleb = 0; currCeleb < n; currCeleb++) {
      if (possCeleb === currCeleb) continue;

      if (knows(possCeleb, currCeleb)) {
        possCeleb = currCeleb;
      }
    }
    return isCeleb(possCeleb, n, knows) ? possCeleb : -1;
  };
};

function isCeleb(i, n, knows) {
  for (let j = 0; j < n; j++) {
    if (i === j) continue;
    if (knows(i, j) || !knows(j, i)) return false;
  }
  return true;
}