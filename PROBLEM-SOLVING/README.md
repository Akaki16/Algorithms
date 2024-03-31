# Problem Solving

- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify
- Look back and refactor

## Questions to ask ourselves

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5. How should I label the important pieces of data that are part of the problem?

## Refactoring Questions

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you increase the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

## Some of the useful problem solving patterns

- Frequency counter
- Multiple pointers
- Sliding window
- Divide and Conquer
- Dynamic programming
- Greedy algorithms
- Backtracking

### Frequency Counter pattern

This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or `O(n^2)` operations with arrays/strings.

### Multiple Pointers pattern

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving complex problems with minimal space complexity. `(data must be sorted)`

### Sliding Window pattern

This pattern involves creating a window which can either be an array or a number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset.

### Divide and Conquer pattern

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity. `Binary Search` is an example of divide and conquer algorithm.

## Further Reading

[Problem Solving](https://en.wikipedia.org/wiki/Problem_solving)
