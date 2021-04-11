'use strict';
const Node = require('./node.js');

class Stack {
    constructor(top) {
        this.top = null;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if (!this.top) {
            return 'exception';
        } else {
            let temp = this.top;
            this.top = temp.next;
            temp.next = null;
            return temp.data;
        }
    }

    peek() {
        if (!this.top) {
            return 'exception';
        } else {
            return this.top.data;
        }
    }

    isEmpty() {
        if (this.top == null) {
            return true;
        } return false;
    }
}


class Queue {
    constructor(front) {
        this.front = null;
        this.tail = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        if (!this.front) {
            return 'exception';
        } else {
            let temp = this.front;
            this.front = temp.next;
            temp.next = null;
            return temp.data;
        }
    }

    peek() {
        if (!this.front) {
            return 'exception';
        } else {
           return this.front.data;
        }
    }

    isEmpty() {
        if (this.front == null) {
            return true;
        } return false;
    }
}

module.exports = {Stack , Queue};