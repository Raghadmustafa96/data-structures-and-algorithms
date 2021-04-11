'use strict';
const Node = require('../node.js');
const {Stack} = require('../stacks-and-queues.js');
const {Queue} = require('../stacks-and-queues.js');

describe('Stack', () => {
  it('should push onto a stack', () => {
    let newStack = new Stack();
    newStack.push(7);
    
    expect(newStack.top.data).toEqual(7);
  });

  it('should push multiple values onto a stack', () => {
    let newStack = new Stack();
    newStack.push(7);
    newStack.push(3);
    newStack.push(17);

    expect(newStack.top.data).toEqual(17);
  });

  it('should pop off the stack', () => {
    let newStack = new Stack();
    newStack.push(7);
    newStack.push(3);
    newStack.push(17);

    expect(newStack.pop()).toEqual(17);
    expect(newStack.top.data).toEqual(3);
  });

  it('should stack be empty after multiple pops', () => {
    let newStack = new Stack();
    newStack.push(7);
    newStack.push(3);
    newStack.pop();
    newStack.pop();

    expect(newStack.isEmpty()).toEqual(true);
  });

  it('should stack be empty after multiple pops', () => {
    let newStack = new Stack();
    newStack.push(7);
    newStack.push(3);
    newStack.pop();
    newStack.pop();

    expect(newStack.isEmpty()).toEqual(true);
  });

  it('should peek the item on the stack', () => {
    let newStack = new Stack();
    newStack.push(7);
   
    expect(newStack.peek()).toEqual(7);
  });

  it('should instantiate an empty stack', () => {
    let newStack = new Stack();
   
    expect(newStack.isEmpty()).toEqual(true);
  });

  it('should pop or peek on empty stack raises exception', () => {
    let newStack = new Stack();
   
    expect(newStack.peek()).toEqual('exception');
    expect(newStack.pop()).toEqual('exception');
  });

});


describe('Queue', () => {
  it('should enqueue into a queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(7);
    
    expect(newQueue.front.data).toEqual(7);
    expect(newQueue.tail.data).toEqual(7);

  });

  it('should enqueue multiple values into a queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(7);
    newQueue.enqueue(3);
    newQueue.enqueue(17);

    expect(newQueue.front.data).toEqual(7);
    expect(newQueue.tail.data).toEqual(17);
  });

  it('should dequeue out of a queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(7);
    newQueue.enqueue(3);
    newQueue.enqueue(17);

    expect(newQueue.dequeue()).toEqual(7);
    expect(newQueue.front.data).toEqual(3);
  });

  it('should peek into a queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(7);
    newQueue.enqueue(3);
  
    expect(newQueue.peek()).toEqual(7);
  });

  it('should a queue be empty after multiple dequeues', () => {
    let newQueue = new Queue();
    newQueue.enqueue(7);
    newQueue.enqueue(3);
    newQueue.dequeue();
    newQueue.dequeue();
  
    expect(newQueue.isEmpty()).toEqual(true);
  });

  it('should instantiate an empty queue', () => {
    let newQueue = new Queue();
   
    expect(newQueue.isEmpty()).toEqual(true);
  });

  it('should dequeue or peek on empty queue raises exception', () => {
    let newQueue = new Queue();
   
   expect(newQueue.peek()).toEqual('exception');
   expect(newQueue.dequeue()).toEqual('exception');  });
});
