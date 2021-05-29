// https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/1373/
// https://leetcode.com/problems/walls-and-gates/
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  const INF = 2147483647;
  let [mQ, nQ] = [[], []];
  let [m, n] = [rooms.length, rooms[0].length];

  if (m === 1 && n === 1) {
    return rooms;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        mQ.push(i);
        nQ.push(j);
        rooms[i][j] = INF;
      }
    }
  }

  let dis = 0;
  let qLen = mQ.length || nQ.length;
  while (qLen !== 0) {
    let [mIdx, nIdx] = [mQ.shift(), nQ.shift()];
    let val = rooms[mIdx][nIdx];

    if (mIdx + 1 < m && val === INF) {
      mQ.push(mIdx + 1);
      nQ.push(nIdx);
    }
    if (mIdx - 1 >= 0 && val === INF) {
      mQ.push(mIdx - 1);
      nQ.push(nIdx);
    }

    if (nIdx + 1 < n && val === INF) {
      nQ.push(nIdx + 1);
      mQ.push(mIdx);
    }
    if (nIdx - 1 >= 0 && val === INF) {
      nQ.push(nIdx - 1);
      mQ.push(mIdx);
    }

    if (val === INF)
      rooms[mIdx][nIdx] = Math.min(val, dis);

    qLen--;
    if (qLen === 0) {
      qLen = mQ.length || nQ.length;
      dis++;
    }
  }
  return rooms;
};