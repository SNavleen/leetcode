// https://leetcode.com/problems/course-schedule-ii/

class Graph {
  constructor(node) {
    this.val = node;
    this.edges = [];
    this.visited = false;
    this.isVisiting = false;
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let graph = createGraph(numCourses, prerequisites);
  let schedule = [];

  for (const node of graph) {
    if (hasCycle(node, schedule))
      return []
  }

  return [...new Set(schedule)];
};

function hasCycle(node, schedule) {
  node.visited = true;
  node.isVisiting = true;

  for (let e of node.edges) {
    if (!e.visited && hasCycle(e, schedule))
      return true;
    else if (e.isVisiting)
      return true;
  }

  schedule.push(node.val)

  node.isVisiting = false;
  return false;
}

function createGraph(numCourses, prerequisites) {
  let graph = [];
  for (let i = 0; i < numCourses; i++) {
    graph[i] = new Graph(i);
  }

  for (const [course, preReq] of prerequisites) {
    let preReqGraph = graph[preReq];
    graph[course].edges.push(preReqGraph);
  }

  return graph;
}