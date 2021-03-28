'use strict';

module.exports =  function reverseArray(arr){
    let arr1 = [];
      for(let i =1 ; i<=arr.length ; i++){
          arr1.push(arr[arr.length -i])
      }
      return arr1;
   }
