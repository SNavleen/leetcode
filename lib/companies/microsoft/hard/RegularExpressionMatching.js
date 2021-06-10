// https://leetcode.com/explore/interview/card/microsoft/46/backtracking/189/
// https://leetcode.com/problems/regular-expression-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let map = new Map();
  function dp(sidx, pidx) {
    if (sidx > s.length) return false;
    if (sidx === s.length && pidx === p.length) return true;

    const key = sidx + ',' + pidx;
    if (map.has(key)) return map.get(key);

    let currMatch = false;
    if (p[pidx] === '.' || p[pidx] === s[sidx]) currMatch = true;
    if (p[pidx + 1] === '*') {
      const skipMatch = dp(sidx, pidx + 2);
      const multiMatch = currMatch && dp(sidx + 1, pidx);
      map.set(key, skipMatch || multiMatch);
    } else {
      const nextMatch = dp(sidx + 1, pidx + 1);
      map.set(key, currMatch && nextMatch);
    }
    return map.get(key);
  }

  return dp(0, 0);
};