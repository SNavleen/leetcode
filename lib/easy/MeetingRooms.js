// https://leetcode.com/problems/meeting-rooms/

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  let sortedIntervals = intervals.sort(([a,], [b,]) => a - b);
  for (let i = 1; i < intervals.length; i++) {
    let prevEnd = sortedIntervals[i - 1][1];
    let currStart = sortedIntervals[i][0];
    if (currStart < prevEnd) return false;
  }
  return true;
};