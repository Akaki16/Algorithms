# Space Complexity in JavaScript

- most primitives `(booleans, numbers, undefined, null)` are constant space.
- strings require `O(n)` space complexity (where n is the string length)
- reference types are generally `O(n)`, where n is the length `(for arrays)` or the number of keys `(for objects)`

## Logarithms

- `loga(b) = c` (a^c = b)
- `log2(value) = exponent` (2^exponent = value)
- `log2(8) = 3` (2^3 = 2 _ 2 _ 2 = 8)

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.
`8 : 2 = 4, 4 : 2 = 2, 2 : 2 = 1, log2(8) = 3`

<br>

- Certain searching algorithms have logarithmic time complexity.
- Efficient sorting algorithms involve logarithms.
- Recursion sometimes involves logarithmic space complexity.

## Big O of objects

- Insertion: `O(1)`
- Removal: `O(1)`
- Searching: `O(n)`
- Access: `O(1)`
- Object.keys: `O(n)`
- Object.values: `O(n)`
- Object.entries: `O(n)`
- hasOwnProperty: `O(1)`

objects are great for fast insertion/deletion.

## Big O of array methods

- push: `O(1)`
- pop: `O(1)`
- shift: `O(n)`
- unshift: `O(n)`
- concat: `O(n)`
- slice: `O(n)`
- splice: `O(n)`
- sort: `O(n * logn)`
- forEach/map/filter/reduce/e.t.c: `O(n)`
