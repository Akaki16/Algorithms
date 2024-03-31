'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const removedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedTail.prev = null;
    }

    this.length--;

    return removedTail;
  }

  shift() {
    if (this.length === 0) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unsfift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter, current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        counter++;
        current = current.next;
      }
      return current;
    }

    if (index > this.length / 2) {
      counter = this.length - 1;
      current = this.tail;
      while (counter > index) {
        counter--;
        current = current.prev;
      }
      return current;
    }
  }

  set(index, value) {
    const node = this.get(index);

    if (node !== null) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) this.unsfift(value);
    if (index === this.length) this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);

    const temp = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    newNode.next = temp;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(15);
list.push(20);
list.push(25);
list.push(30);
list.push(35);
list.push(40);
list.push(45);
list.push(50);

// console.log(list.pop());
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.unsfift(5);
// console.log(list.get(3));
// console.log(list.get(8));
// list.set(8, 55);
// list.insert(9, 60);
// list.insert(3, 23);
console.log(list.remove(3));

// console.log(list.head);
// console.log(list.length);
list.print();
