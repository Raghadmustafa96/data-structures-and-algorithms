'use strict';

const arrayShift = require('../array-shift.js');

describe('arrayShift', () => {
  it('should add the new number on the middle of array :)', () => {
    expect(arrayShift([1,2,3,4],5)).toStrictEqual([1,2,5,3,4]);
    expect(arrayShift([1,2,3,4,6],5)).toStrictEqual([1,2,3,5,4,6]);
  });

  it('Expected failure', () => {
    expect(arrayShift([1,2,3,4,6],5)).not.toEqual([1,5,2,3,4,6]);
  });

  it('should the empty array return empty array', () => {
    expect(arrayShift([],5)).toStrictEqual([]);
  });
});
