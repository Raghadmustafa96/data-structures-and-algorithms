'use strict';
const Node = require('../node.js');

describe('Node',()=>{
    it('should the node have correct data and next value' , ()=>{
       let newNode = new Node(5);
       // Node { data: 5, next: null }

       expect(newNode.data).toEqual(5);
       expect(newNode.next).toEqual(null);
    })
}); 
