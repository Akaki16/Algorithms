# Graph (data structure)

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. (Nodest connections)

## Uses for Graphs

- Social Networks
- Location/Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations

## Recommendation systems

- "people also watched"
- "you might also like"
- "people you might know"
- "frequency bought with"

## Essential Graph terms

- Vertex: a node
- Edge: connection between nodes
- Weighted/Unweighted: values assigned to distances between vertices
- Directed/Undirected: directions assigned to distances between vertices

## Adjacency Matrix and Adjacency List

```

[-, A, B, C, D, E, F]
[A, 0, 1, 0, 0, 0, 1]
[B, 1, 0, 1, 0, 0, 0]
[C, 0, 1, 0, 1, 0, 0]
[D, 0, 0, 1, 0, 1, 0]
[E, 0, 0, 0, 1, 0, 1]
[F, 1, 0, 0, 0, 1, 0]

```

```

[
    0: [1, 5]
    1: [0, 2]
    2: [1, 3]
    3: [2, 4]
    4: [3, 5]
    5: [4, 0]
]

```

## Adjacency Matrix VS. List Big O

- `[V]`: number of vertices
- `[E]`: number of edges

```
[Operation, Adjacency List, Adjacency Matrix]
[Add Vertex, `O(1)`               `O([V]^2)`]
[Add Edge, `O(1)`                    `O(1)` ]
[Remove Vertex, `O([V] + [E])`,   `O([V]^2)`]
[Remove Edge, `O([E])`,              `O(1)` ]
[Query, `O([V] + [E])`               `O(1)` ]
[Storage, `O([V] + [E])`,         `O([V]^2)`]
```

## Adjacency List VS. Adjacency Matrix

### Adjacency List:

- can take up less space (in sparse graphs)
- faster to iterate over all edges
- can be slower to lookup specific edge

### Adjacency Matrix:

- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

## Adding a vertex

- Write a method called `addVertex`, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

## Adding an edge (connection)

- This function should accept two vertices, we can call them `vertex1` and `vertex2`
- The function should find in the adjacency list the key of vertex1 and `push` vertex2 to the array
- The function should find in the adjacency list the key of vertex2 and `push` vertex1 to the array
- Don't worry about handling errors/invalid vertices

## Removing an edge (connection)

- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that doesn't contain vertex2
- The function should reassign the key of vertex2 to be an array that doesn't contain vertex1
- Don't worry about handling errors/invalid vertices

## Removing a vertex

- The function should accept a vertex to remove
- The function should loop as long as there are any other vertices in the adjacency list for that vertex
- Inside of the loop, call our `removeEdge` function with the vertex we are removing and any values in the adjacency list for that vertex
- Delete the key in the adjacency list for that vertex

## Graph Traversal

Visiting/updating/checking each vertex in a graph. uses for it: peer to peer networking, web crawlers, finding "closest" matches, recommendations, shortest path problems, GPS navigation, Solving mazes, AI, shortest path to win the game.

## Depth First Graph traversal

Explore as far as possible down one branch before "backtracking"

## DFS pseudocode

```
DFS(vertex):
    if vertex is empty:
        return this (base case)
    add vertex to results list
    mark vertex as visited
    for each neighbour in vertex's neighbour's:
        if neighbour is not visited:
            recursively call DFS on neighbour
```
