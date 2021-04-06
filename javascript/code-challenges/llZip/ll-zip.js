'use strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list.js');

let firstLl = new LinkedList();
 firstLl.insert(3);
 firstLl.insert(2);
 firstLl.insert(1);
console.log(firstLl.toString())


let secondLl = new LinkedList();
secondLl.insert(6);
secondLl.insert(5);
secondLl.insert(4);
console.log(secondLl.toString())


function zipLists (list1,list2){
    const mergedLL = new LinkedList();
    let currentNode1 = list1.head;
    let currentNode2 = list2.head;
    while(currentNode1 || currentNode2){
      if(currentNode1){
        mergedLL.append(currentNode1.data);
        currentNode1=currentNode1.next;
      }
      if(currentNode2){
        mergedLL.append(currentNode2.data);
        currentNode2=currentNode2.next;
      }
    }
    let str = mergedLL;
    return str;
  }


console.log(zipLists(firstLl,secondLl).toString());
