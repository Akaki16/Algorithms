# Hash Table

hash tables are used to store `key-value` pairs. They are like arrays, but the keys are not ordered. Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values.

<br>

To implement a hash table, we will be using an array. In order to look up values by key, we need a way to convert keys into valid array indicies. A function that performs this task is called a `hash` function.

## What makes a good hash?

- Fast (i.e. it should be `constant` time)
- Doesn't cluster outputs at specific indicies, but distributes uniformly
- Deterministic (same input yeilds same output)

## hash that works on strings only

```js
function hash(key, arrayLen) {
  let total = 0;

  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
}
```

## Dealing with collisions

Even with a large array and a great hash function, `collisions` are inevitable. There are many strategies for dealing with collisions, but we will focus on two.

1. `separate chaining`: with separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list). This allows us to store multiple key-value pairs at the same index

2. `linear probing`: with linear probing, when we find a collision, we search through the array to find the next empty slot. unlike with separate chaining, this allows us to store a single key-value at each index

### set

- Accepts a key and a value
- Hashes the key
- Stores the key-value pair in the hash table array via separate chaining

### get

- Accepts a key
- Hashes the key
- Retrieves the key-value pair in the hash table
- If the key isn't found, return undefined

### keys:

loops through the hash table array and returns an array of keys in the table

### values:

loops through the hash table array and returns an array of values in the table.

## Hash Table Big O complexity

- Insertion: `O(1)`
- Deletion: `O(1)`
- Access: `O(1)`

<br>

- Hash tables are collections of `key-value` pairs
- Hash tables can find values quickly given a key
- Hash tables can add new key-values quickly
- Hash tables store data in a large array, and work by hashing the keys
- A good `hash` should be fast, distribute keys uniformly, and be deterministic
- `separate chaining` and `linear probing` are two strategies used to deal with two keys that hash to the same index

<br>

hash function is like a bridge (connection) which maps a key to an index for storing the key's value

<br>

Hash table is an extremly efficient data structure, which can be used for fast insertion, deletion and access.
