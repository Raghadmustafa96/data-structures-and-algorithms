'use strict';
const Node = require('./node.js');
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.data == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str = str + `{ ${current.data} } -> `;
      current = current.next;
    }
    str = str + 'NULL';
    return str;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
    } else {
      let current = this.head;
      while (current) {
        if (!current.next) {
          current.next = newNode;
          this.length++;
          return;
        }
        current = current.next;
      }
    }
  }

  insertBefore(value, newVal) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
    } else {
      let current = this.head;
      while (current.next) {
        if (this.head.data == value) {
          this.insert(newVal);
          return;
        } else if (current.next.data == value) {
          newNode.next = current.next;
          current.next = newNode
          newNode.data = newVal;
          this.length++;
          return;
        } 
        current = current.next;
      }
      return;
    }
  }

  insertAfter(value, newVal){
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
    } else {
      let current = this.head;
      while (current) {
        if (current.data == value) {
          newNode.next = current.next;
          current.next = newNode;
          newNode.data = newVal;
          this.length++;
          return;
        }
        current = current.next;
      }
      return;
    }
  }
 
  kthFromEnd(k){
    if(this.length == 1){
      return this.head.data;
    } else if(k >= this.length || k < 0 || this.length == 0){
       return 'Exception';
    } else {
      let current = this.head;
        while(k < this.length -1 ){
          current = current.next;
          k++ ;
        }
        return current.data;
    }
  }
}

module.exports = LinkedList;