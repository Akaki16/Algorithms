'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
    return this;
  }

  pop() {
    if (this.size === 0) return null;

    const removedFirst = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedFirst.next;
    }

    this.size--;
    return removedFirst.val;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.pop());

console.log(stack);
