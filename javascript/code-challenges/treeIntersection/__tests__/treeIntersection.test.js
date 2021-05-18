'use strict';
const treeIntersection = require('../treeIntersection.js');
const { BinaryTree } = require('../../tree/tree.js');
const Node = require('../../tree/node.js');

describe('treeIntersection', () => {
  let tree1;
  let tree2;
  let tree3;

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(40);
    let five = new Node(55);
    let six = new Node(7);
    let seven = new Node(2);
    let eight = new Node(33);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree1 = new BinaryTree(one);
    
    one = new Node(1);
    two = new Node(20);
    three = new Node(7);
    four = new Node(40);
    five = new Node(55);
    six = new Node(20);
    seven = new Node(33);
    eight = new Node(66);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree2 = new BinaryTree(one);
    });
    
  it('should return a set of values found in both trees.', () => {
    const result = treeIntersection(tree1, tree2);
    console.log(result);
    expect(result).toEqual([ 40, 33, 55, 1, 7 ]);
  });
})
