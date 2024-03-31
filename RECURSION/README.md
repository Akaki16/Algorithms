# Recursion

A process (a function in our case) that calls itself.

- `JSON.parse` uses recursion
- `JSON.stringify` uses recursion
- `DOM` traversal algorithms are implemented using recursion
- `Object` traversal is done using recursion

Recursion is basically everywhere. Recursion is sometimes cleaner alternative to iteration.

## Call Stack

In almost all program languages, there is a built-in data structure that manages what happens when functions are invoked. It's named `call stack`.

- It's a stack data structure `stack`
- Any time a function is invoked it is placed, `pushed` on top of the call stack
- When JavaScript sees the `return` keyword or when the function ends, the compiler will remove the function, `pop`

## How recursive functions work

Invoke the same function with a different input until you reach your `base case`! (The condition when the recursion ends). It's always required in a recursive function.

## Code Examples

```js
function countDown(n) {
  if (n <= 0) {
    console.log('all done');
    return;
  }
  console.log(n);
  n--;
  countDown(n);
}
```

- `countDown(3)` `n = 3` -> `console.log(3)` `n--` `n = 2`
- `countDown(2)` `n = 2` -> `console.log(2)` `n--` `n = 1`
- `countDown(1)` `n = 1` -> `console.log(1)` `n--` `n = 0`
- `countDown(0)` `n = 0` -> `0 <= 0` is true, so base case is true in that case and we print `all done` and return from the function to end it.

```js
function sumRange(n) {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
}
```

- `sumRange(5)` `n = 5` `5 === 1` is false. `return 5 + sumRange(4)` `n = 4`
- `return 4 + sumRange(3)` `3 === 1` is false. `n = 3`
- `return 3 + sumRange(2)` `2 === 1` is false. `n = 2`
- `return 2 + sumRange(1)` `1 === 1` is true. `base case` is reached

Finally we have: `5 + 4 + 3 + 2 + 1 = 15`

## Further Reading

[Recursion - General Mathematical Idea](https://en.wikipedia.org/wiki/Recursion)
[Recursion - Computer Science](<https://en.wikipedia.org/wiki/Recursion_(computer_science))
