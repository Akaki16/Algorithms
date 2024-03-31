# Intro to BIG O notation

BIG O notation is a way to formalize "fuzzy counting". It allows us to talk formally about how the runtime of an algorithm grows as the input grow.
We won't care about the details, only on the trends.
We say that an algorithm is `O(f(n))` if the number of operations the computer has to do is eventually less than a constant times `f(n)` as n increases.

- `f(n)` could be linear: `f(n) = n`
- `f(n)` could be constant: - `f(n) = 1`
- `f(n)` could be quadratic: `f(n) = n^2`
- `f(n)` could be something different

## First Example

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

This function always performs `3 operations`, n (size) doesn't matter. so its `time complexity` is `O(1)` (constant).

## Second Example

```js
function addUpTo(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total = total + i;
  }

  return total;
}
```

In this function, number of operations is `eventually bounded by a multiple of n` (say, 10n). `Time Complexity` of this function based on that is `O(n)` (linear)

## Third Example

```js
function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = n - 1; j > 0; j--) {
    console.log(j);
  }
}
```

In this function number of operations is eventually bounded by a multiple of n, say (10n). Time Complexity of this function therefore is `O(n)`. `O(n) + O(n) = O(2n) = O(n)`. (linear time complexity)

## Fourth example

```js
function printPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

Here we have a nested loop, loop inside another loop. `O(n) operation inside another O(n) operation`. So the time complexity of this function is `O(n^2)`.
`O(n) * O(n) = O(n * n) = O(n^2)`. (quadratic time complexity)

## Further Reading

- [Big O](https://en.wikipedia.org/wiki/Big_O_notation)
- [Time Complexity](https://en.wikipedia.org/wiki/Time_complexity)
