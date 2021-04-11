'use strict';
const {Stack} = require('../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {
    constructor(){
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    enqueue(value){
        this.pushStack.push(value);
    }

    dequeue(){
       if(this.popStack.isEmpty() && this.pushStack.isEmpty()){
           return 'exception'
       } else if(this.popStack.isEmpty()){
        while(this.pushStack.top){
        this.popStack.push(this.pushStack.pop());
        }
      } 
        return this.popStack.pop();
     }

     peek(){
        if(this.popStack.isEmpty() && this.pushStack.isEmpty()){
            return 'exception'
        } else if(this.popStack.isEmpty()){
            while(this.pushStack.top){
            this.popStack.push(this.pushStack.pop());
            }
        }
           return this.popStack.peek();
     }

     isEmpty(){
        if(this.popStack.isEmpty() && this.pushStack.isEmpty()){
            return 'Queue is Empty'
        } 
     }

    toString(){
        const pushStackData = this.pushStack.toString();
        const popStackData = this.popStack.toString();
        return {pushStackData , popStackData};
    }
}

module.exports = PseudoQueue ;

// const s1 = new PseudoQueue();
// s1.enqueue(20);
// s1.enqueue(10);

// s1.enqueue(5);
 
// console.log(s1.dequeue());
// console.log(s1.dequeue());
// s1.enqueue(2);

// console.log(s1.dequeue());
