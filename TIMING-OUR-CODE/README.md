# Timing our code

## First Example

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

We have `1 multiplication`, `1 addition`, `1 divison`.
It will always perform 3 simple operations regardless of the size of n.

## Second Example

```js
function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total = total + i;
  }

  return total;
}
```

Here we have `n additions`, `n assignments`, `1 assignment`, `n comparisons`.
Regardless of the exact number, The number of operations grows roughly proportionally with n.
