'use strict';

const reverse = require('../reverse.js');

describe('Reverse', () => {
  it('should return the correct reverse array', () => {
    expect(reverse([10,20,30,40,50])).toStrictEqual([50,40,30,20,10]);
  });
});
