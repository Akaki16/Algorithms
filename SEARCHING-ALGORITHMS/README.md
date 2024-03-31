# Searching Algorithms

Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want. There are many different search methods on arrays in JavaScript: `indexOf`, `includes`, `find`, `findIndex` and others. This type of searching algorithm is called `linear search`.

## Big O of Linear Search

- In the best case scenario it is `O(1)` (constant)
- In average case it is `O(n)` (linear)
- In the worst case it is `O(n)` as well

## Linear Search pseudocode

- This function accepts a `sorted/unsorted` array and a value to search.
- Iterate from the `start` to the `end` of an array and check if an element at current index is equal to the target value, In that case return found `index`.
- If for loop is done and we didn't find the value, `return -1`.

## Binary Search (divide and conquer)

- Binary Search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- `Binary Search only works on sorted arrays`

## Big O of Binary Search

- In the best case it is `O(1)` (constant)
- In the worst case it is `O(log n)` (logarithmic)
- In the average case it is `O(log n)` (logarithmic)

## Binary Search pseudocode

- This function accepts a sorted array and a value
- Create a `left` pointer at the start of the array, and a `right` pointer at the end of the array.
- While the `left` pointer comes before the `right` pointer: Create a pointer in the middle
- If you find the value you want, return the `index`
- If the value is too small, move the `left` pointer up
- If the value is too large, move the `right` pointer down
- If you never find the value, `return -1`

## Naive String Search

Suppose you want to count the number of times a smaller string appears in a longer string. A straightforward approach involves checking pairs of characters individually.

## Naive String Search (pseudocode)

- Loop over the longer string (`outer loop`)
- Loop over the shorter string (`inner loop`)
- If the characters don't match, `break` out of the inner loop.
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

## Further Reading

- [Linear Search](https://en.wikipedia.org/wiki/Linear_search)
- [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [Naive String Search](https://en.wikipedia.org/wiki/String-searching_algorithm)
