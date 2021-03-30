'use strict';

module.exports = function binarySearch(arr, n) {
    let min = 0;
    let max = arr.length - 1;
    let mid;
    while (min <= max) {
      // console.log("count")
      mid = Math.ceil((min + max)/2);
      // console.log(mid)
      if (arr[mid] === n) {
        return mid;
      } else if (arr[mid] < n) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
  
    return -1;
  }
  