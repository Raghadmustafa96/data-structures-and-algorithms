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
                    if ( node.right == null ) {
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
        let traverse = function(node) {
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

module.exports = { BinaryTree, BinarySearchTree };