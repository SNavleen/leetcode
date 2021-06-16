// https://leetcode.com/explore/interview/card/microsoft/48/others/157/
// https://leetcode.com/problems/the-skyline-problem/
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  function recurSkyline(b) {
    const len = b.length;
    if (len === 0) return [];
    if (len === 1) {
      return [
        [b[0][0], b[0][2]],
        [b[0][1], 0]
      ];
    }

    let skylineLeft = recurSkyline(b.slice(0, len / 2));
    let skylineRight = recurSkyline(b.slice(len / 2, len));

    return mergeSkyline(skylineLeft, skylineRight);
  }

  return recurSkyline(buildings);
};

function mergeSkyline(left, right) {
  let output = [];
  let [pL, pR] = [0, 0];
  let [currX, currY] = [0, 0];
  let [leftY, rightY] = [0, 0];

  while (pL < left.length && pR < right.length) {
    let lx = left[pL][0];
    let ly = left[pL][1];
    let rx = right[pR][0];
    let ry = right[pR][1];

    if (lx < rx) {
      leftY = ly;
      currX = lx;
      pL++;
    } else if (rx < lx) {
      rightY = ry;
      currX = rx;
      pR++;
    } else {
      leftY = ly;
      rightY = ry;
      currX = lx;
      pL++;
      pR++;
    }

    let max = Math.max(leftY, rightY);
    if (currY != max) {
      currY = max;
      output.push([currX, currY]);
    }
  }

  while (pL < left.length) {
    output.push(left[pL]);
    pL++;
  }

  while (pR < right.length) {
    output.push(right[pR]);
    pR++;
  }
  return output;
}