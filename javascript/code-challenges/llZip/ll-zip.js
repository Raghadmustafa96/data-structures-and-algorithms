'use strict';
const LinkedList = require('../Data-Structures/linkedList/linked-list.js');

// let firstLl = new LinkedList();
// firstLl.insert(3);
// firstLl.insert(2);
// firstLl.insert(1);
// console.log(firstLl.toString())

// let secondLl = new LinkedList();
// secondLl.insert(6);
// secondLl.insert(5);
// secondLl.insert(4);
// console.log(secondLl.toString())

module.exports = function zipLists(firstLl, secondLl) {
  const newLinkedList = new LinkedList();
  let current1 = firstLl.head;
  let current2 = secondLl.head;

  while (current1 || current2) {
    if (current1) {
      newLinkedList.append(current1.data);
      current1 = current1.next;
    }
    if (current2) {
      newLinkedList.append(current2.data);
      current2 = current2.next;
    }
  }
  return newLinkedList;
}

// console.log(zipLists(firstLl, secondLl).toString());
