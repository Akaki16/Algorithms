# Singly Linked List

A data structure that contains a `head`, `tail` and `length` property. Linked Lists consists of `nodes` and each `node` has a value and a `pointer` to another node or null.

## Comparisons with arrays

Lists:

- Do not have indexes
- Connected via nodes with a next pointer
- Random access is not allowed

Arrays:

- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

## Pushing

Adding a new node to the end of the linked list

## push method pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no `head` property on the list, set the `head and tail` to be newly created node
- Otherwise set the `next` property on the `tail` to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
- Return the linked list

## Popping

Removing a node from the end of the linked list

- If there are no nodes in the list, return `undefined`
- Loop through the list until you reach the tail
- Set the next property of the `2`nd to last node to be null
- Set the tail to be the `2`nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed

## Shifting

Removing a node from the beginning of the linked list

## shift pseudocode

- If there are no nodes, return `undefined`
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed

## Unshifting

Adding a new node to the beginning of the linked list

## unshift pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list

## Get

Retrieving a node by its position in the linked list

## get pseudocode

- This function should accept an index
- If the index is less than zero or greater than or equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index

## Set

Changing the value of a node based on its position in the linked list

## set pseudocode

- This function should accept a value and an index
- Use your get function to find the specific node
- If the node is not found, return false
- If the node is found, set the value of that node to be the value passed to the function and return true

## Insert

Adding a new node to the linked list a specific position

## Insert pseudocode

- If the index is less than zero or greater than the length, return false
- If the index is the same as the length, `push` a new node to the end of the list
- If the index is zero, `unshift` a new node to the start of the list
- Otherwise, using the `get` method access the node at `index - 1`
- Set the next property on that node to be the new node
- Set the next property on the new node to be the previous next
- Increment the length
- Return true

## Remove

Removing a node from the linked list a specific position

## remove pseudocode

- If the index is less than zero or greater than the length, return undefined
- If the index is the same as the `length - 1`, `pop`
- If the index is 0, `shift`
- Otherwise, using the `get` method access the node at `index - 1`
- Set the next property on that node to be the next of the next node
- Decrement the length
- Return the value of the node removed

## Reverse

Reversing the linked list in place

## reverse pseudocode

- Swap the head and tail
- Create a variable called `next`
- Create a variable called `prev`
- Create a variable called node and initialize it to the head property
- Loop through the list
- Set next to be the next property on whatever node is
- Set the next property on the node to be whatever prev is
- Set prev to be the value of the node variable
- Set the node variable to be the value of the next variable

## Big O of Singly Linked List

- Insertion takes time complexity of `O(1)`
- Time Complexity of removal depends, it takes `O(1)` or `O(n)`
- Time Complexity of searching is `O(n)`
- Time Complexity of accessing is `O(n)`

Singly Linked Lists are an exellent alternative to arrays when insertion and deletion at the beginning are frequently required.
Arrays contain a built-in index whereas linked lists do not -
The idea of the list data structure that consists of nodes is the foundation for other data structures like `stacks` and `queues`

## Further Reading

[Singly Linked List](https://en.wikipedia.org/wiki/Linked_list)
