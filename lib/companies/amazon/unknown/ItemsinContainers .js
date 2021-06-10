// https://leetcode.com/discuss/interview-question/1148760/items-in-containers-amazon-oa
/**
  Given a string s consisting of items as "*" and closed compartments as an open and close "|", an array of starting indices startIndices, and an array of ending indices endIndices, determine the number of items in closed compartments within the substring between the two indices, inclusive.

  An item is represented as an asterisk *
  A compartment is represented as a pair of pipes | that may or may not have items between them.
  Example:
  s = '|**|*|*'
  startIndices = [1,1]
  endIndices = [5,6]

  The String has a total 2 closed compartments, one with 2 items and one with 1 item. For the first par of indices, (1,5), the substring is '|**|*'. There are 2 items in a compartment.
  For the second pair of indices, (1,6), the substring is '|**|*|' and there 2+1=3 items in compartments.
  Both of the answers are returned in an array. [2,3].
 */

/**
 * 
 * @param {String} s 
 * @param {Array[Integer]} startIndices 
 * @param {Array[Integer]} endIndices
 */
var numberOfItems = function (s, startIndices, endIndices) {
  let sSize = s.length;
  let [starOnLeft, starsOnRight] = [[], []];
  let [leftCount, rightCount] = [0, 0];
  let [leftTotal, rightTotal] = [0, 0];
  for (let i = 0, j = sSize - 1; i < sSize && j >= 0; i++, j--) {
    if (s.charAt(i) === '|') [leftCount, rightCount] = [leftTotal, rightTotal];
    else if (s.charAt(i) === '*') [leftTotal++, rightTotal++];
    [starOnLeft[i], starsOnRight[i]] = [leftCount, rightCount];
  }

  let ans = [];
  for (let i = 0; i < startIndices.length; i++) {
    let [start, end] = [startIndices[i] - 1, endIndices[i] - 1];
    let count = starsOnRight[start] + starOnLeft[end] - leftTotal // We can do rightTotal as well since they are the same size
    if (start >= 0 && end < n && start < end && count > 0) ans.push(count);
    else ans.push(0);
  }
}