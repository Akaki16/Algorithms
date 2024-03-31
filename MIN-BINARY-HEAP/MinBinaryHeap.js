'use strict';

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];
      if (element >= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMin() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild < element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swapIndex === null && rightChild < element) ||
          (swapIndex !== null && rightChild < leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
    }
  }
}

const heap = new MinBinaryHeap();

heap.insert(50);
heap.insert(55);
heap.insert(60);
heap.insert(20);
heap.insert(15);

console.log(heap);
console.log(heap.extractMin());
console.log(heap);
console.log(heap.extractMin());
console.log(heap);
