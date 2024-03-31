'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        // Check for duplicate
        if (val === current.val) return undefined;
        // Inserting at left
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
        // Inserting at right
        if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return current;
        // Search left
        if (val < current.val) {
          if (!current.left) {
            return false;
          } else {
            current = current.left;
          }
        }
        // Search right
        if (val > current.val) {
          if (!current.right) {
            return false;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(val) {
    const foundNode = this.find(val);
    if (foundNode.val) {
      return true;
    } else {
      return false;
    }
  }

  BFS() {
    let node = this.root;
    const queue = [node];
    const visited = [];
    while (queue.length !== 0) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  DFSPreOrder() {
    const visited = [];
    const current = this.root;

    function traverse(node) {
      visited.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }

  DFSPostOrder() {
    const visited = [];
    const current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      visited.push(node.val);
    }

    traverse(current);
    return visited;
  }

  DFSInOrder() {
    const visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);

      visited.push(node.val);

      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }
}

const BST = new BinarySearchTree();

BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(2);

console.log(BST.BFS());
console.log(BST.DFSPreOrder());
console.log(BST.DFSPostOrder());
console.log(BST.DFSInOrder());
