// https://leetcode.com/explore/interview/card/microsoft/46/backtracking/155/
// https://leetcode.com/problems/wildcard-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  return backtrack(0, 0, -1, -1, s, p)
};

function backtrack(sidx, pidx, staridx, stempidx, s, p) {
  while (sidx < s.length) {
    if (pidx < p.length && (p[pidx] === '?' || p[pidx] === s[sidx])) {
      ++pidx;
      ++sidx;
    } else if (pidx < p.length && p[pidx] === '*') {
      staridx = pidx;
      stempidx = sidx;
      ++pidx;
    } else if (staridx === -1) {
      return false;
    } else {
      pidx = staridx + 1;
      sidx = stempidx + 1
      stempidx = sidx;
    }
  }

  for (let i = pidx; i < p.length; i++)
    if (p[i] !== '*')
      return false;

  return true;
}