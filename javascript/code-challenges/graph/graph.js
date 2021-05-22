'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return null;
    }

    return [...this.adjacencyList.get(vertex)];
  }

  depthFirst(vertex) {

    const stack = [];
    const visitedVertices = new Set();

    stack.push(vertex);
    visitedVertices.add(vertex);

    while (stack.length) {
      let currentVertex = stack.pop();
      visitedVertices.add(currentVertex);
      let neighbors = this.getNeighbors(currentVertex);
      if (!neighbors) { return null; }

      for (let neighbor of neighbors) {
        let neighborVertex = neighbor.vertex;

        if (visitedVertices.has(neighborVertex)) {
          continue;
        }
        else { stack.push(neighborVertex); }
      }
    }
    return visitedVertices;
  }

  size(vertex) {
    if (this.depthFirst(vertex)) {
      return this.depthFirst(vertex).size;
    } else { return null; }
  }
}
module.exports = {
  Vertex,
  Edge,
  Graph,
};
