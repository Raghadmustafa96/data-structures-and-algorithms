'use strict';
let treeIntersection = (tree1, tree2) => {
    const arr1 = tree1.inOrder();
    const arr2 = tree2.inOrder();

    let full = arr1.filter((value) =>{
        if(arr2.includes(value)){
            return true;
        }
    });
    return full;
};

module.exports = treeIntersection;
