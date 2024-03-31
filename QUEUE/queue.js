'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;

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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
