'use strict';
const Node = require('./node.js');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        const results = [];
        const _traverse = (node) => {
            results.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return results;
    }

    inOrder() {
        const results = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            results.push(node.value);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return results;
    }

    postOrder() {
        const results = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            results.push(node.value);
        };
        _traverse(this.root);
        return results;
    }

    findMaximumValue() {
        let findMax = (newNode = this.root) => {
            if (!this.root) {
                return 'empty tree';
            } else {
                let leftMax;
                let rightMax;
                let max = newNode.value;

                if (newNode.left != null) {
                    leftMax = findMax(newNode.left);
                    max = (max > leftMax) ? max : leftMax;
                }

                if (newNode.right != null) {
                    rightMax = findMax(newNode.right);
                    max = (max > rightMax) ? max : rightMax;
                }
                return max;
            }
        }
        return findMax();
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    add(data) {
        let nNode = new Node(data);

        if (this.root == null) {
            this.root = nNode;
        } else {
            const _traverse = (node) => {

                if (data > node.value) {
                    if (node.right == null) {
                        node.right = nNode;
                    }
                    _traverse(node.right);
                } else
                    if (data < node.value) {
                        if (node.left == null) {
                            node.left = nNode;
                        }
                        _traverse(node.left);
                    }
            };

            _traverse(this.root);
        }
    }

    contains(value) {
        let node = this.root;
        let traverse = function (node) {
            if (!node)
                return 'empty';
            if (value == node.value) {
                return true;
            } else if (value > node.value) {
                return traverse(node.right);
            } else if (value < node.value) {
                return traverse(node.left);
            }
        };
        return traverse(node);
    }
}


// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(1555);
// const six = new Node(6555);
// const seven = new Node(7);
// const eight = new Node(8);
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// five.left = eight;
// three.left = six;
// three.right = seven;
// let tree = new BinaryTree(one);


// console.log(tree.findMaximumValue());

module.exports = { BinaryTree, BinarySearchTree };
