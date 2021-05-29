// https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/1375/
// https://leetcode.com/problems/open-the-lock/


const numberOfCombos = (combo) => {
  let ans = [];
  for (let i = 0; i < combo.length; i++) {
    ans.push(combo.slice(0, i) + ((+combo[i] + 1) % 10) + combo.slice(i + 1));
    ans.push(combo.slice(0, i) + ((+combo[i] + 9) % 10) + combo.slice(i + 1));
  }
  return ans;
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let queue = ['0000'];
  let [dead, visited] = [new Set(deadends), new Set(queue)];
  let turns = 0;

  while (queue.length) {
    const nextQueue = [];
    while (queue.length) {
      let combo = queue.shift();
      if (combo === target) return turns;
      if (dead.has(combo)) continue;

      for (let c of numberOfCombos(combo)) {
        if (visited.has(c)) continue;
        visited.add(c);
        nextQueue.push(c);
      }
    }
    turns++;
    queue = nextQueue;
  }
  return -1;
};