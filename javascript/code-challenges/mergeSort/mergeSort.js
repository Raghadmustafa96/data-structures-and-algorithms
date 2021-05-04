'use strict';
function mergeSort(arr){
    let len = arr.length ;
    if (len <= 1) {
      return arr;
    } else {
      let mid = Math.floor(len/2);
  
      let right = arr.slice(mid, len);
      let  left = arr.slice(0, mid);
  
      let sRight = mergeSort(right);
      let sLeft = mergeSort(left);
  
      return merge(sLeft, sRight);
      };
  };
  
function merge(left, right){

  let arr2 = [];

  while ( right.length && left.length) {
    if (left[0] > right[0]){
      arr2.push(right.shift());
    } else {
      arr2.push(left.shift());
    }
  }

  while (right.length ) {
    arr2.push(right.shift());
  }

  while (left.length ) {
    arr2.push( left.shift());
  }

  return arr2;
};


module.exports = mergeSort;