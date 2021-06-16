// https://leetcode.com/problems/integer-to-roman/
const riMap = setMap();
const riArr = Array.from(riMap);
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let out = '';
  for (let i = 0; i < riArr.length && num > 0; i++) {
    while (riArr[i][1] <= num) {
      num -= riArr[i][1];
      out = out + riArr[i][0];
    }
  }
  return out;
};
function setMap() {
  let map = new Map();
  map.set('M', 1000);
  map.set('CM', 900);
  map.set('D', 500);
  map.set('CD', 400);
  map.set('C', 100);
  map.set('XC', 90);
  map.set('L', 50);
  map.set('XL', 40);
  map.set('X', 10);
  map.set('IX', 9);
  map.set('V', 5);
  map.set('IV', 4);
  map.set('I', 1);
  return map;
}