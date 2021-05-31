// https://leetcode.com/explore/learn/card/queue-stack/239/conclusion/1393/
// https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const currColor = image[sr][sc];
  const [rLen, cLen] = [image.length, image[0].length];

  if (currColor === newColor) return image;

  function dfs(stack) {
    while (stack.length !== 0) {
      let idx = stack.pop();
      let [sr, sc] = [idx[0], idx[1]];
      image[sr][sc] = newColor;
      // up
      if (sr - 1 >= 0 && image[sr - 1][sc] === currColor) {
        stack.push([sr - 1, sc]);
        dfs(stack);
      }
      // down
      if (sr + 1 < rLen && image[sr + 1][sc] === currColor) {
        stack.push([sr + 1, sc]);
        dfs(stack);
      }
      // right
      if (sc + 1 < cLen && image[sr][sc + 1] === currColor) {
        stack.push([sr, sc + 1]);
        dfs(stack);
      }
      // left
      if (sc - 1 >= 0 && image[sr][sc - 1] === currColor) {
        stack.push([sr, sc - 1]);
        dfs(stack);
      }
    }
  }

  dfs([[sr, sc]]);
  return image;
};