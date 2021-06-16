// https://leetcode.com/discuss/interview-question/1217911/Microsoft-Interview-Question-Strings-Anagrams
// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let anagramMap = new Map();
  for (let word of strs) {
    let key = getKey(word);
    if (!anagramMap.has(key))
      anagramMap.set(key, []);
    let list = anagramMap.get(key);
    list.push(word);
    // anagramMap.set(key, list);
  }

  return [...anagramMap.values()];
};

function getKey(word) {
  return word.split('').sort().join('');
}