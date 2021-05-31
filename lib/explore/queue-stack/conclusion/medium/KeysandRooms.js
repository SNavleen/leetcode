// https://leetcode.com/explore/learn/card/queue-stack/239/conclusion/1391/
// https://leetcode.com/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  if (rooms.length === 1) return true;

  let visited = Array.from({ length: rooms.length }, () => false);
  let visitedCounter = 0;
  let roomsLen = rooms.length;
  let keyQueue = [];

  keyQueue = keyQueue.concat(rooms[0]);
  visited[0] = true;
  visitedCounter++;
  while (keyQueue.length !== 0) {
    let idx = keyQueue.pop();
    if (visited[idx]) continue;
    else {
      for (let k of rooms[idx]) keyQueue.push(k);
    }
    visited[idx] = true;
    visitedCounter++;
    if (visitedCounter === roomsLen) return true;
  }
  return false;
};