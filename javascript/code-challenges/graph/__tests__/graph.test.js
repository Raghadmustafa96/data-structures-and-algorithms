'use strict';

const test = require('../graph.js');
describe('testing the instantiating of a proper graph', () => {
  const graph = new test.Graph();
  const one = new test.Vertex('one');
  const two = new test.Vertex('two');
  const three = new test.Vertex('three');
  const five = new test.Vertex('five');

  it('Node can be successfully added to the graph', () => {
    graph.addVertex(one);

    expect(graph.getSize(one)).toEqual(1);
  });

  it('An edge can be successfully added to the graph', () => {
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addEdge(one, two);
    graph.addEdge(one, three);
    expect(graph.adjacencyList.get(one)[0].vertex.value).toEqual('two');
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    expect(graph.getNeighbors(one)).toBeTruthy();
    expect(graph.getNeighbors(one)[0].vertex.value).toEqual('two');
    expect(graph.getNeighbors(one)[1].vertex.value).toEqual('three');
    expect(graph.getNeighbors(one)[0].weight).toEqual(0);
    expect(graph.getNeighbors(one)[1].weight).toEqual(0);
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    expect(graph.getNeighbors(one)).toBeTruthy();
    expect(graph.getNeighbors(one)[0].vertex.value).toEqual('two');
    expect(graph.getNeighbors(one)[1].vertex.value).toEqual('three');
    expect(graph.getNeighbors(one)[0].weight).toEqual(0);
    expect(graph.getNeighbors(one)[1].weight).toEqual(0);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    const graphTwo = new test.Graph();
    graphTwo.addVertex(five);
    graphTwo.addEdge(five, null);
    expect(graphTwo.adjacencyList.get(five)[0].vertex).toEqual(null);
    expect(graphTwo.adjacencyList.get(five)[0].weight).toEqual(0);
  });

  it('An empty graph properly returns null', () => {
    const graphThree = new test.Graph();
    expect(graphThree.getSize(null)).toEqual(null);
  });
});