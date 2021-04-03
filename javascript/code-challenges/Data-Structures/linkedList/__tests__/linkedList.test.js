'use strict';

const LinkedList = require('../linked-list.js');

describe('Linked List', () => {
  let newLinkedList = new LinkedList();

  it('should instantiate an empty linked list', () => {
    // LinkedList { head: null, length: 0 }

    expect(newLinkedList.head).toBeNull(); 
    expect(newLinkedList.length).toEqual(0); 
  });

  it('should insert a new value into the linked list', () => {
    newLinkedList.insert(7);
    // LinkedList { head: Node { data: 7, next: null }, length: 1 }
    expect(newLinkedList.length).toEqual(1);
  });

  it('should head property point to the first node in the linked list', () => {
    // LinkedList { head: Node { data: 7, next: null }, length: 1 }

    expect(newLinkedList.head.data).toEqual(7);
    expect(newLinkedList.head.next).toBeNull();
  });

  it('should insert multiple nodes into the linked list', () => {
    newLinkedList.insert(10);
    newLinkedList.insert(5);
    newLinkedList.insert(3);
    newLinkedList.insert(2);
    
    expect(newLinkedList.length).toEqual(5);
  });

  it('should return true when finding a value within the linked list that exists', () => {
    expect(newLinkedList.includes(5)).toEqual(true);
    expect(newLinkedList.includes(10)).toEqual(true);
    expect(newLinkedList.includes(3)).toEqual(true);
    expect(newLinkedList.includes(7)).toEqual(true);
  });

  it('should return false when searching for a value in the linked list that does not exist', () => {
    expect(newLinkedList.includes(20)).toEqual(false);
  });

  it('should return a collection of all the values that exist in the linked list', () => {
    expect(newLinkedList.toString()).toEqual('{ 2 } -> { 3 } -> { 5 } -> { 10 } -> { 7 } -> NULL');
  });
});
