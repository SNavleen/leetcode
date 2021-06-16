// https://leetcode.com/discuss/interview-question/398023/Microsoft-Online-Assessment-Questions
// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let charFreq = {};
  let totalChanges = 0;
  let start = 0;

  for (let char of s) {
    if (!(char in charFreq))
      charFreq[char] = 0;
    charFreq[char]++;
  }

  const charFreqSortedDes = Object.entries(charFreq);
  let charFreqSet = new Set();

  if (charFreqSortedDes.length === charFreqSet.size) {
    return totalChanges;
  }

  while (start < charFreqSortedDes.length) {
    let val = charFreqSortedDes[start][1];
    while (val > 0) {
      if (!charFreqSet.has(val)) {
        charFreqSet.add(val);
        break;
      }
      totalChanges++;
      val--;
    }
    if (val === 0)
      delete charFreqSortedDes[start];
    else
      charFreqSortedDes[start][1] = val;

    if (charFreqSortedDes.length === charFreqSet.size)
      break;

    start++;
  }
  return totalChanges;
};