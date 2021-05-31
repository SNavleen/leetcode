// https://leetcode.com/discuss/interview-question/1144843/Amazon-or-OA-or-April-2021-or-Storage-Optimization-or-CloudFront-Caching
// https://aonecode.com/oa-cloudfront-caching
/**
 * 
 * @param {Integer} n 
 * @param {Integer[][]} connections 
 */
var costEvaluation = function (n, connections) {
  // Create a graph for given pairs of connections
  let graph = new Map();
  for (let i = 0; i < connections.length; i++) {
    graph.has(connection[0]) ? graph.set(connections[0], []) : null;
    graph.has(connection[1]) ? graph.set(connections[1], []) : null;

    graph.get(connections[0]).push(connections[1]);
    graph.get(connections[1]).push(connections[0]);
  }

  // DFS that graph and create groups of connected warehouses
  let visited = [];
  let warehouses = [];
  for (let w = 0; w < n; w++) {
    if (!visited[w]) {
      let connectedWarehouse = checkWarehouseDFS(warehouse, graph, visited);
      warehouses.push(connectedWarehouse);
    }
  }

  // Traverse the groups and calculate the cost
  let sum = 0;
  for (let i = 0; i < warehouses.length; i++) {
    if (warehouses[i].length === 1) sum++;
    else sum += Math.ceil(Math.sqrt(warehouses[i].length));
  }

  return sum;
}

/**
 * DFS
 * @param {Integer} warehouse 
 * @param {Map(Integer, Array(Integer))} graph 
 * @param {boolean[]} visited 
 * @param {Array(Integer)} connectedWarehouse 
 */
function checkWarehouseDFS(warehouse, graph, visited, connectedWarehouse = []) {
  if (visited[warehouse]) return;

  visited[warehouse] = true;
  connectedWarehouse.push(warehouse);

  graph.forEach((val) => {
    checkWarehouseDFS(val, graph, visited, connectedWarehouse);
  });
}