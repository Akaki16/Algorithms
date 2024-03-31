# Binary Search Tree

- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent

## insert

- Create a new node
- Starting at the root...
- Check if there is a root, If not - the root now becomes that new node
- If there is a root, check if the value of the new node is greater than or less than the value of the root
- If it is greater -> check to see if there is a node to the right, If there is, move to that node and repeat these steps. If there is not, add that node as the right property
- If it is less -> check to see if there is a node to the left, If there is, move to that node and repeat these steps. If there is not, add that node as the left property

## search

- Starting at the root...
- Check if there is a root, if not, we are done searching
- If there is a root, check if the value of the target node is the value we are looking for, If we found it, we are done
- If not, check to see if the value is greater than or less than the value of the root
- If it is greater -> check to see if there is a node to the right, if there is, move to that node and repeat these steps, If there is not, and we are done searching
- If it is less, check to see if there is a node to the left, If there is, move to that node and repeat these steps, If there is not, we are done searching

Insert method is used to insert nodes in the binary search tree and search is used to search for nodes in the binary search tree

## BFS (Breadth-First-Search)

- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
- Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
- If there is a left property on the node dequeued - add it to the queue
- If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

## DFS (Depth-First-Traversal) (PreOrder)

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
- Push the value of the node to the variable that stores values
- If the node has a left property, call the helper function with the left property on the node
- If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable

Using these two methods we can visit all of the nodes, but in a different order

## DFS (Depth-First-Traversal) (PostOrder)

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
- If the node has a left property, call the helper function with the left property on the node
- If the node has a right property, call the helper function with the right property on the node
- Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable
- Return the array of values

## DFS (Depth-First-Traversal) (InOrder)

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
- If the node has a left property, call the helper function with the left property on the node
- Push the value of the node to the variable that stores the values
- If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable

These methods are used to visit every node in a BST (Binary Search Tree).

## Big O of Binary Search Trees

- Insertion: `O(log n)`
- Searching: `O(log n)`

These time complexities are not guaranteed, because we might have a one sided tree, in which case `insertion` and `searching` would take `O(n)` time complexity in the worst case.

## Further Reading

[Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree)
[Tree Traversal](https://en.wikipedia.org/wiki/Tree_traversal)
[Breadth-First-Search (BFS)](https://en.wikipedia.org/wiki/Breadth-first_search)
[Depth-First-Search (DFS)](https://en.wikipedia.org/wiki/Depth-first_search)
