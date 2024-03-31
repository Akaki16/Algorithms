# Queue

A `FIFO` data structure - (first in, first out). Queues are used for background taks: uploading resources, printing/task processing.

## enqueue

- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue.
- Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
- Increment the size of the queue by 1

## dequeue

- If there is no first property, just return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of first
- Decrement the size by 1
- Return the value of the node removed

## Big O of queues

- Insertion: `O(1)`
- Removal: `O(1)`
- Searching: `O(n)`
- Access: `O(n)`

Summary:
<br>

- Queues are FIFO data structure, all elements are first in, first out
- Queues are useful for processing tasks and are foundational for more complex data structures

## Further Reading

[Queue](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>)
