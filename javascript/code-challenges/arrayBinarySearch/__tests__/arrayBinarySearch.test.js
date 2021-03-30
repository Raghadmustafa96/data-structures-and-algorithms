'use strict';

const binarySearch = require('../array-binary-search.js');

describe('arrayBinarySearch', () => {
  it('should the index of the array’s element equal the search key', () => {
    expect(binarySearch([1,2,3,4,5,6],2)).toEqual(1);
  });

  it('should return -1 if the element does not exist on array', () => {
    expect(binarySearch([1,2,3,4,5,6],10)).toEqual(-1);
  });

  it('should return -1 if array is empty', () => {
    expect(binarySearch([],5)).toStrictEqual(-1);
  });
});
