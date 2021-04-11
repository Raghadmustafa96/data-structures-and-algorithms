'use strict';
const PseudoQueue = require('../queue-with-stacks.js');

describe('Queue With Stacks', () => {
  it('should insert on to a PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue(7);
    
    expect(newQueue.pushStack.top.data).toEqual(7);
  });

  it('should extracts a value from the PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue(7);
    newQueue.enqueue(3);
    newQueue.enqueue(10);
   
    expect(newQueue.dequeue()).toEqual(7);  // if dequeue
  });

  it('should return Queue isEmpty if do not add any value', () => {
    let newQueue = new PseudoQueue();
    expect(newQueue.pushStack.isEmpty()).toEqual(true);
    expect(newQueue.popStack.isEmpty()).toEqual(true);

    expect(newQueue.isEmpty()).toEqual('Queue is Empty');
  });

  it('should peek the item on the PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue(3);
    newQueue.enqueue(10);
    newQueue.enqueue(5);

    expect(newQueue.peek()).toEqual(3);
  });

  it('should dequeue or peek on empty PseudoQueue raises exception', () => {
    let newQueue = new PseudoQueue();
   
    expect(newQueue.peek()).toEqual('exception');
    expect(newQueue.dequeue()).toEqual('exception');
  });

});
