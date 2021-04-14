'use strict';
const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');

module.exports = function multiBracketValidation(input) {
    const multiBracket = new Stack();
    if ((input[0] == ']' || input[0] == ')' || input[0] == '}')) return false;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == '(' || input[i] == ')' || input[i] ==
            '[' || input[i] == ']' || input[i] == '{' || input[i] == '}') {

            if (multiBracket.isEmpty()) { multiBracket.push(input[i]); }
            else if (multiBracket.top.data == '[' && input[i] == ']' ||
                multiBracket.top.data == '(' && input[i] == ')' || multiBracket.top.data == '{' && input[i] == '}') {
                multiBracket.pop();
            } else {
                multiBracket.push(input[i]);
            }
        }
    }
    // console.log(multiBracket.toString())
    if (multiBracket.isEmpty()) return true;
    return false;
}

// let str1 = '(){}[[]]'	
// let str2 = '{}{Code}[Fellows](())'
// let str3 = '[({}]'
// let str4 = '(]('
// let str5 = '{(})'

// console.log(multiBracketValidation(str1)); 
// console.log(multiBracketValidation(str2));
// console.log(multiBracketValidation(str3));
// console.log(multiBracketValidation(str4));
// console.log(multiBracketValidation(str5));
