'use strict';
const InsertionSort = require('../sort.js');

describe('Sort', () => {
  it('should sort the array in sequence way', () => {
    let arr = [8,4,23,42,16,15];
     expect(InsertionSort(arr)).toEqual([4,8,15,16,23,42]);
  });

  it('should sort the array With duplicate values in sequence way', () => {
    let arr = [5,12,7,5,5,7];
     expect(InsertionSort(arr)).toEqual([5,5,5,7,7,12]);
  });

  it('should sort the array With negative and positive values in sequence way', () => {
    let arr = [-8,4,23,42,-16,15];
     expect(InsertionSort(arr)).toEqual([-16,-8,4,15,23,42]);
  });
});
