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

  printAll() {
    for (const [vertex, edge] of this.adjacencyList.entries()) {
      console.log([vertex, edge]);
    }
  }

  getSize() {
    return this.adjacencyList.size > 0 ? this.adjacencyList.size : null;
  }

  getNodes() {
    return this.adjacencyList.entries();
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};

// const graph = new Graph();

// const ten = new Vertex(10);
// const two = new Vertex(2);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const three = new Vertex(3);
// const eight = new Vertex(8);

// graph.addVertex(ten);
// graph.addVertex(two);
// graph.addVertex(six);
// graph.addVertex(seven);
// graph.addVertex(three);
// graph.addVertex(eight);

// graph.addEdge(ten, two);
// graph.addEdge(ten, six);
// graph.addEdge(ten, three);
// graph.addEdge(ten, seven);
// graph.addEdge(two, seven);
// graph.addEdge(six, seven);
// graph.addEdge(six, eight);
// graph.addEdge(three, eight);
// graph.addEdge(eight, seven);
/*
const ten = new Vertex(10);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
graph.addVertex(ten);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(seven, eight);
*/
// console.log(graph);
// graph.printAll();
// console.log(graph.getSize());
