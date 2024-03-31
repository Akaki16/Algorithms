# Doubly Linked List

## push

- Create a new node with the value passed to the function
- If the head property is null, set the head and tail to be the newly created node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to to be the tail
- Set the tail to be the newly created node
- Increment the length
- Return the Doubly Linked List

## pop

- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous node
- Set the new tail's next property to null
- Decrement the length
- Return the value removed

Using these simple two methods we can add and remove nodes from a doubly linked list

## shift

- If the length is 0, return undefined
- Store the current head property in a variable (we'll call it old head)
- If the length is one, set the head to be null, set the tail to be null
- Update the head to be the next of the old head
- Set the head's next property to null
- Decrement the length
- Return old head

## unshift

- Create a new node with the value passed to the function
- If the length is 0, set the head to be the new node, set the tail to be the new node
- Othwerise, set the prev property on the head of the list to be the new node, set the next property on the new node to be the head property, update the head to be the new node
- Increment the length
- Return the list

Using these two methods we can add and remove at the start of doubly linked list

## get

- If the index is less than 0 or greater or equal to the length, return null
- If the index is less than or equal to half the length of the list, loop through the list starting from the head and loop towards the middle. Return the node, once it is found
- If the index is greater than half the length of the list, loop through the list staring from the tail and loop towards the middle. Return the node, once it is found

## set

- Create a variable which is the result of the get method at the index passed to the function
- If the get method returns a valid node, set the value of that node to be the value passed to the function
- Return true
- Otherwise, return false

Using these two methods we can get and change value of the node in a doubly linked list at a specific index

## insert

- If the index is less than zero or greater than the length, return false
- If the index is 0, unshift
- If the index is the same as the length, push
- Use the get method to access the index - 1
- Set the next and prev properties on the correct nodes to link everything together
- Increment the length
- Return true

## remove

- If the index is less than zero or greater than or equal to the length, return undefined
- If the index is zero, shift
- If the index is length - 1, pop
- Use the get method to retrieve the item to be removed
- Update the next and prev properties to remove the found node from the list
- Set the next and prev to null on the found node
- Decrement the length
- Return the removed node

## Big O of doubly linked list

- Insertion: `O(1)`
- Removal: `O(1)`
- Searching: `O(n)`
- Access: `O(n)`

Comparison with singly linked list:
<br>

- Doubly Linked Lists are almost identical to Singly Linked Lists except there is additional pointer to previous nodes
- Better than singly linked lists for finding nodes and can be done in half the time
- However, they do take up more memory considering the extra pointer

## Further Reading

[Doubly Linked List](https://en.wikipedia.org/wiki/Doubly_linked_list)
