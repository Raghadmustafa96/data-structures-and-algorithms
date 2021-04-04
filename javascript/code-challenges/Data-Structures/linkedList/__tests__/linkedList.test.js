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
    
    expect(newLinkedList.length).toEqual(3);
  });

  it('should return true when finding a value within the linked list that exists', () => {
    expect(newLinkedList.includes(5)).toEqual(true);
    expect(newLinkedList.includes(10)).toEqual(true);
    expect(newLinkedList.includes(7)).toEqual(true);
  });

  it('should return false when searching for a value in the linked list that does not exist', () => {
    expect(newLinkedList.includes(20)).toEqual(false);
  });

  it('should return a collection of all the values that exist in the linked list', () => {
    expect(newLinkedList.toString()).toEqual('{ 5 } -> { 10 } -> { 7 } -> NULL');
  });

  it('should add a node to the end of the linked list', () => {
    newLinkedList.append(111);
    expect(newLinkedList.length).toEqual(4);
    expect(newLinkedList.toString()).toEqual('{ 5 } -> { 10 } -> { 7 } -> { 111 } -> NULL');
  });

  it('should add multiple nodes to the end of a linked list', () => {
    newLinkedList.append(100);
    newLinkedList.append(200);
    expect(newLinkedList.length).toEqual(6);
    expect(newLinkedList.toString()).toEqual('{ 5 } -> { 10 } -> { 7 } -> { 111 } -> { 100 } -> { 200 } -> NULL');
  });

  it('should insert a node before a node located data 111 in the middle of a linked list', () => {
    newLinkedList.insertBefore(111,888) ;
    expect(newLinkedList.toString()).toEqual('{ 5 } -> { 10 } -> { 7 } -> { 888 } -> { 111 } -> { 100 } -> { 200 } -> NULL');
    expect(newLinkedList.length).toEqual(7);
  });

  it('should insert a node before the first node of a linked list', () => {
    newLinkedList.insertBefore(5,333) ;
    expect(newLinkedList.toString()).toEqual('{ 333 } -> { 5 } -> { 10 } -> { 7 } -> { 888 } -> { 111 } -> { 100 } -> { 200 } -> NULL');
    expect(newLinkedList.length).toEqual(8);
  });

  it('should insert after a node in the middle of the linked list after ( value 888 )', () => {
    newLinkedList.insertAfter(888,5555) ;
    expect(newLinkedList.toString()).toEqual('{ 333 } -> { 5 } -> { 10 } -> { 7 } -> { 888 } -> { 5555 } -> { 111 } -> { 100 } -> { 200 } -> NULL');
    expect(newLinkedList.length).toEqual(9);
  });

  it('should insert a node after the last node of the linked list after ( value 200 )', () => {
    newLinkedList.insertAfter(200,1000) ;
    expect(newLinkedList.toString()).toEqual('{ 333 } -> { 5 } -> { 10 } -> { 7 } -> { 888 } -> { 5555 } -> { 111 } -> { 100 } -> { 200 } -> { 1000 } -> NULL');
    expect(newLinkedList.length).toEqual(10);
  });
  
  it('should not add any node after or before value if this not exist on linked list', () => {
    newLinkedList.insertBefore(0,33) ;
    newLinkedList.insertAfter(0,33) ;
    expect(newLinkedList.length).toEqual(10);
  });
});
