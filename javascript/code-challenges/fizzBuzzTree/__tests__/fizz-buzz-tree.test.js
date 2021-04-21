'use strict';
const Node = require('../node.js');
const FizzBuzzTree = require('../fizz-buzz-tree.js');
const KaryTree = require('../k-aryTree.js');

describe('fizz-buzz-tree', () => {

  let tree;
  const one = new Node(1, 3);
  const two = new Node(2, 3);
  const three = new Node(3, 3);
  const four = new Node(4, 3);
  const five = new Node(5, 3);
  const six = new Node(6, 3);
  const seven = new Node(7, 3);
  const eight = new Node(8, 3);
  const nine = new Node(9, 3);
  const ten = new Node(10, 3);
  const eleven = new Node(11, 3);
  const twelve = new Node(12, 3);
  const thirteen = new Node(13, 3);
  const fourteen = new Node(14, 3);
  const fifteen = new Node(15, 3);

  one.children[0] = two;
  one.children[1] = three;
  one.children[2] = four;
  two.children[0] = five;
  two.children[1] = six;
  two.children[2] = seven;
  three.children[0] = eight;
  three.children[1] = nine;
  three.children[2] = ten;
  four.children[0] = eleven;
  four.children[1] = twelve;
  five.children[0] = thirteen;
  five.children[1] = fourteen;
  five.children[2] = fifteen;

  tree = new KaryTree(3);
  tree.root = one;

  it('should return modified values Fizz if value in tree divided 3', () => {
    let fizz = FizzBuzzTree(tree).root.children[1].value;
    expect(fizz).toEqual('Fizz');
  });

  it('should return modified values Buzz if value in tree divided 5', () => {
    let Buzz = FizzBuzzTree(tree).root.children[0].children[0].value;
    expect(Buzz).toEqual('Buzz');
  });

  it('should return modified values FizzBuzz if value in tree divided 5 and 3', () => {
    let FizzBuzz = FizzBuzzTree(tree).root.children[0].children[0].children[2].value;
    expect(FizzBuzz).toEqual('FizzBuzz');
  });
});
