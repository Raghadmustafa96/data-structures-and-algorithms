'use strict';

const arrayShift = require('../array-shift.js');

describe('arrayShift', () => {
  it('should add the new number on the middle of array', () => {
    expect(arrayShift([1,2,3,4],5)).toStrictEqual([1,2,5,3,4]);
    expect(arrayShift([1,2,3,4,6],5)).toStrictEqual([1,2,3,5,4,6]);
    expect(arrayShift([],5)).toStrictEqual([]);
  });
});
