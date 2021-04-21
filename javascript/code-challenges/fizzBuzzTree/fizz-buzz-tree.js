'use strict';

const {Queue} = require('../stacksAndQueues/stacks-and-queues.js');
const KaryTree = require('./k-aryTree.js');

function FizzBuzzTree(tree) {

  let newTree = new KaryTree(tree.k);

  newTree.root = tree.root;

  let queue = new Queue();

  if (!newTree.root){
  return 'Empty';
  }else {
  queue.enqueue(newTree.root);
  }

  const _walk = (node) => {

    if (node.value % 5 === 0  && node.value % 3 === 0)
     node.value = 'FizzBuzz';
    else if (node.value % 5 === 0)
     node.value = 'Buzz';
    else if (node.value % 3 === 0)
     node.value = 'Fizz';
    else node.value = node.value.toString();

    for (let i = 0; i < node.children.length; i++){
      if (node.children[i]) {
        queue.enqueue(node.children[i]);
      }
    }

    if(!queue.isEmpty())
     _walk(queue.dequeue());
  };

  _walk(queue.dequeue());
  return newTree;
}

module.exports = FizzBuzzTree;
