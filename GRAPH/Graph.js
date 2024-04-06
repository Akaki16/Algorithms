'use strict';

class Graph {
  constructor() {
    this.adjcencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjcencyList[vertex]) {
      this.adjcencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjcencyList[vertex1].push(vertex2);
    this.adjcencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjcencyList[vertex1] = this.adjcencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjcencyList[vertex2] = this.adjcencyList[vertex1].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjcencyList[vertex].length !== 0) {
      const adjacentVertex = this.adjcencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjcencyList[vertex];
  }

  dfsRecursive(startVertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjcencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }

    dfs(startVertex);
    return result;
  }

  dfsIterative(startVertex) {
    const stack = [startVertex];
    const result = [];
    const visited = {};

    visited[startVertex] = true;

    while (stack.length !== 0) {
      const currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjcencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  bfs(startVertex) {
    const queue = [startVertex];
    const result = [];
    const visited = {};

    visited[startVertex] = true;

    while (queue.length !== 0) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjcencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

// console.log(g.dfsRecursive('A'));
// console.log(g.dfsIterative('A'));
console.log(g.bfs('A'));
