'use strict';
const repeatedWord = require('../repeatedword');

describe('Repeated Word', () => {
  it('should find the first repeated word in string ', () => {
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(str)).toEqual('summer');
  });

  it('should return null if string not contain Repeated Word', () => {
    let str = 'I learned react js';
    expect(repeatedWord(str)).toEqual(null)
  });

  it('should find the first repeated word in string also with space and symbols', () => {
    let str = 'I .><,learned learned react js';
    expect(repeatedWord(str)).toEqual('learned')
  });
});
