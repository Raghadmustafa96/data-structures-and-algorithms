'use strict';
let HashTable = require('../hashtable/hashtable');

let treeIntersection = (tree1, tree2) => {
    let hashTable = new HashTable(100);
    const arr1 = tree1.inOrder();
    const arr2 = tree2.inOrder();
    let arr3=[];

    arr1.push(...arr2);

    for (let i = 0; i < arr1.length; i++) {
        let k = arr1[i];

        if (hashTable.find(k) == k) {
            arr3.push(k);
        } else {
            hashTable.add(k, k);
        }
    }
    return arr3;
};

module.exports = treeIntersection;

