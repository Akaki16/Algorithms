# Simplifying Big O expressions

- When determining Big O, constants don't matter. For example: `O(2n) = O(n)`, `O(500) = O(1)`, `O(13n^2) = O(n^2)`.
- Smaller terms don't matter as well. For example: `O(n + 10) = O(n)`, `O(1000n + 50) = O(n)`, `O(n^2 + 5n + 8) = O(n^2)`.

## Simplifying Examples

- `O(n + 10) = O(n)`
- `O(100 * n) = O(100n) = O(n)`
- `O(25) = O(1)`
- `O(n^2 + n^3) = O(n^3)`
- `O(n + n + n + n) = O(4n) = O(n)`

1. `O(n)` means linear
2. `O(n^3)` means cubic
3. `O(1)` means constant

## Big O Shorthands

- Arithmetic operations are constant. `O(1)`
- Variable assignment is constant. `O(1)`
- Accessing elements in an array `(by index)` or object `(by key)` is constant. `O(1)`
- In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside of the loop.

![Big O time complexity chart](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)

## Code Snippets

```js
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

Time Complexity of this function is `O(n)` (linear), Because we have a for loop which will always run based on the size of n. (n times)

```js
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

This function's time complexity is always bounded up to a constant (10). So its time complexity is `O(10)` which simplifies to `O(1)`. (constant)

```js
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
```

In this function if n is less than 10, it will run 10 times always. If it is larger than 10, it will run that number of times. (n times). So the time complexity of this function is bounded up to n. Therefore time complexity of this function is `O(n)`.

## Further Reading

[Big O](https://en.wikipedia.org/wiki/Big_O_notation)
