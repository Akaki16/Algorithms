# Stack

A `LIFO` data structure. The last element added to the stack will be the first element to be removed from the stack. Think about a stack of plates, or a stack of markers, or a stack of anything. As you pile it up, the last thing (or the topmost thing) is what gets to removed first.

## Where stacks are used

- Managing function invocations
- Undo/Redo functionality
- Routing (the history object) is treated like a stack!

## push

- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node
- If there is atleast one node, create a variable that stores the current first property of the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

## pop

- If there are no nodes in the stack, return null
- Create a temporary variable to store the first property of the stack
- If there is only 1 node, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first
- Decrement the size by 1
- Return the value of the node removed

## Big O of stacks

- Insertion: `O(1)`
- Removal: `O(1)`
- Searching: `O(n)`
- Access: `O(n)`

Summary:
<br>

- stacks are a LIFO data structure where the last value in is always the first one out
- stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more
- They are not a built-in data structure in JavaScript, but are relatively simple to implement

## Further Reading

[Stack](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>)
