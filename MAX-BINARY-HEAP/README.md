# Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a `MaxBinaryHeap` the parent is always greather than the children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

## Important Concepts

For any index of array n, The left child is stored at `2n + 1`. The right child is at `2n + 2`. For any child node at index n, its parent is at index `(n + 1) / 2` (floored)

## Insert pseudocode

- Push the value into the values property on the heap
- Bubble Up: Create a variable called `index` which is the length of the values property - 1
- Create a variable called `parentIndex` which is the floor of `(index + 1) / 2`
- Keep looping as long as the values element at the parent index is less than the values element at the child index
- Swap the value of the values element at the `parentIndex` with the value of the element property at the child index
- Set the index to be the `parentIndex`, and start over!

## Sink Down pseudocode

- The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called `down-heap` (also known as `bubble-down`, `percolate-down`, `sift-down`, `trickle-down`, `heapify-down`, `cascade-down`, and `extract-min/max`)

## extractMax pseudocode

- Swap the first value in the values property with the last one
- Pop from the values property, So you can return the value at the end
- Have the new root `sink down` to the correct spot
- Your parent index starts at 0 (the root)
- Find the index of the left child, `2 * index + 1` (make sure it's not out of bounds)
- Find the index of the right child, `2 * index + 2` (make sure it's not out of bounds)
- If the left or right child is greater than the element... swap. If both left and right children are larger, swap with the largest child
- The child index you swapped to now becomes the new parent index
- Keep looping and swapping until neither child is larger than the element
- Return the old root

## Further Reading

[MaxBinaryHeap](https://en.wikipedia.org/wiki/Min-max_heap)
