'use strict';

class HashTable {
  constructor(size = 57) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i] !== undefined) {
        const key = this.keyMap[i][0][0];
        if (!result.includes(key)) {
          result.push(key);
        }
      }
    }

    return result;
  }

  values() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i] !== undefined) {
        const value = this.keyMap[i][0][1];
        if (!result.includes(value)) {
          result.push(value);
        }
      }
    }

    return result;
  }
}

const map = new HashTable();

map.set('name', 'akaki');
map.set('age', 19);
map.set('university', 'KIU');
map.set('name1', 'lasha');
map.set('university2', 'KIU');

// console.log(map.get('name'));
// console.log(map.get('age'));
// console.log(map.get('university'));

console.log(map.keys());
console.log(map.values());
