// https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let needed = {};
  let minMap = new Map();
  let [start, end] = [0, 0];
  let minLen = Infinity;
  let matched = 0;

  for (let i = 0; i < t.length; i++) {
    if (!needed[t[i]])
      needed[t[i]] = 0;
    needed[t[i]]++;
  }

  while (end < s.length) {
    let charEnd = s[end];
    if (charEnd in needed) {
      needed[charEnd]--;
      if (needed[charEnd] >= 0) matched++;
    }

    while (matched === t.length) {
      let charStart = s[start];

      minLen = Math.min(minLen, end - start + 1);
      if (!minMap.has(minLen))
        minMap.set(minLen, [start, end + 1]);

      if (charStart in needed) {
        if (needed[charStart] === 0) matched--;
        needed[charStart]++;
      }
      start++;
    }
    end++;
  }

  if (minLen > s.length) {
    return '';
  } else {
    let [start, end] = minMap.get(minLen);
    return s.slice(start, end);
  }
};