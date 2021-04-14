'use strict';
const multiBracketValid = require('../multi-bracket-validation.js');

describe('Multi-Bracket Validation', () => {
  it('should return true if the brackets in the string are balanced', () => {
    let str1 = '(){}[[]]';	
    let str2 = '{}{Code}[Fellows](())';
    let str3 = '{}(){}';	
    let str4 = '()[[Extra Characters]]';

    expect(multiBracketValid(str1)).toEqual(true);
    expect(multiBracketValid(str2)).toEqual(true);
    expect(multiBracketValid(str3)).toEqual(true);
    expect(multiBracketValid(str4)).toEqual(true);
  });

  it('should return false if the brackets in the string are not balanced', () => {
    let str1 = '[({}]';	
    let str2 = '(](';
    let str3 = '{(})';	
    let str4 = '{';	
    let str5 = ')';	

    expect(multiBracketValid(str1)).toEqual(false);
    expect(multiBracketValid(str2)).toEqual(false);
    expect(multiBracketValid(str3)).toEqual(false);
  });
});
