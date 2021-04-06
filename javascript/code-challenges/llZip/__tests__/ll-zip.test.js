'use strict';
const llZip = require('../ll-zip.js');
const LinkedList = require('../../Data-Structures/linkedList/linked-list');

describe('zipLists', () => {
  it('should return the correct zipped list for two linked list', () => {
    let firstLl = new LinkedList();
    firstLl.insert(3);
    firstLl.insert(2);
    firstLl.insert(1);

    let secondLl = new LinkedList();
    secondLl.insert(6);
    secondLl.insert(5);
    secondLl.insert(4);
    
    expect(llZip(firstLl,secondLl).length).toEqual(6);
    expect(llZip(firstLl,secondLl).toString()).toEqual('{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> { 6 } -> NULL');
  });

  it('should return the same first linked list if the second length equal 0', () => {
    let firstLl = new LinkedList();
    firstLl.insert(3);
    firstLl.insert(2);
    firstLl.insert(1);

    let secondLl = new LinkedList();

    expect(llZip(firstLl,secondLl).length).toEqual(firstLl.length);
    expect(llZip(firstLl,secondLl).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

  it('should return the same second linked list if the first length equal 0', () => {
    let firstLl = new LinkedList();

    let secondLl = new LinkedList();
    secondLl.insert(6);
    secondLl.insert(5);
    secondLl.insert(4);

    expect(llZip(firstLl,secondLl).length).toEqual(secondLl.length);
    expect(llZip(firstLl,secondLl).toString()).toEqual('{ 4 } -> { 5 } -> { 6 } -> NULL');
  });

  it('should return NULL if the length of 2 linked list = 0', () => {
    let firstLl = new LinkedList();
    let secondLl = new LinkedList();

    expect(llZip(firstLl,secondLl).length).toEqual(0);
    expect(llZip(firstLl,secondLl).toString()).toEqual('NULL');
  });
});
