'use strict';
const Node = require('./node.js');
class LinkedList{
    constructor(){
      this.head = null;
      this.length = 0;
    }

    insert(value){
     let newNode = new Node(value);
     if(!this.head){
         this.head = newNode;
     } else {
       newNode.next = this.head;
       this.head = newNode;
     }
     this.length++;
    }

    includes(value){
        let current = this.head;
        while(current){
           if(current.data == value){
               return true;
           }
           current = current.next;
        }
        return false;
    }

    toString(){
        let current = this.head;
        let str = '';
        while (current) {
          str = str + `{ ${current.data} } -> `;
          current = current.next;
        }
        str = str + 'NULL' ;
        return str;
    }
}

module.exports = LinkedList;