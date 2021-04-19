'use strict';
const Node = require('../node.js');
const {BinaryTree} = require('../tree.js');
const {BinarySearchTree} = require('../tree.js');

describe('Binary Tree', () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);
  });

  it('preOrder', () => {
    const expected = [1, 2, 4, 5, 8, 3, 6, 7];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });
  it('inOrder', () => {
    const expected = [4, 2, 8, 5, 1, 6, 3, 7];
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });
  it('postOrder', () => {
    const expected = [4, 8, 5, 2, 6, 7, 3, 1];
    const postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });

  it('should return the max value in binary tree', () => {
    expect(tree.findMaximumValue()).toEqual(8);
  });
});

describe('Binary Search Tree', () => {
  let binaryTree1 = new BinarySearchTree();
  it('should successfully instantiate empty tree', () => {
    expect(binaryTree1.root).toEqual(null);
  });

  it('should  instantiate a tree with a single root node', () => {
    const data = 20;
    const root = new Node(data);
    const newBinaryT = new BinarySearchTree(root);
    expect(newBinaryT.root.value).toEqual(data);
  });

  it('should add a root node to existing empty tree', () => {
    const data = 10;
    binaryTree1.add(data);
    expect(binaryTree1.root.value).toEqual(data);
  });

  it('should add a left child and right child to a single root node', () => {
    const left = 5;
    const right = 14;

    binaryTree1.add(right);
    binaryTree1.add(left);

    expect(binaryTree1.root.left.value).toEqual(left);
    expect(binaryTree1.root.right.value).toEqual(right);
  });

  it('should search for a value in the tree', () => {
    expect(binaryTree1.contains(20)).toBeTruthy();
  });

  it('should returns exception if search in empty tree', () => {
    const newTree = new BinarySearchTree();
    expect(newTree.contains(5)).toEqual('empty');
  });
});
