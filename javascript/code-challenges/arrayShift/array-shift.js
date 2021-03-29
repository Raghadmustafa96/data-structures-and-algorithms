'use strict';

module.exports =  function insertShiftArray (arr,num){
    if(arr.length == 0){ return [];} else {
        let mid = Math.ceil(arr.length / 2);
        let newArr = [];
    
        for(let i = 0;i< mid ;i++){
        newArr.push(arr[i]);
        }
        newArr.push(num);
    
        for(let j = mid ;j< arr.length ;j++){
        newArr.push(arr[j]);
        }
        return newArr;
    }
    }
