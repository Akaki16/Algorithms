# Sorting

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

- sorting numbers from smallest to largest
- sorting names alphabetically
- sorting movies based on release year
- sorting movies based on revenue

## JavaScript sort method

- The bult-in sort method accepts an optional `comparator` function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator function looks at pairs of elements `(a and b)`, determines their sort `order` based on return value
- If it returns a negative number, a should come before b
- If it returns a positive number, a should come after b
- If it returns 0, a and b are the same as far as the sort is concerned

Sorting is super important topic in Computer Science

## Bubble Sort

A sorting algorithm where largest values bubble up to the top!

Suppose we would like to sort an array:

```
 0  1  2  3  4
[5, 3, 4, 1, 2]
```

1. `[5, 3, 4, 1, 2]`
   swap `3` and `5`
2. `[3, 5, 4, 1, 2]`
   swap `4` and `5`
3. `[3, 4, 5, 1, 2]`
   swap `1` and `5`
4. `[3, 4, 1, 5, 2]`
   swap `2` and `5`
5. `[3, 4, 1, 2, 5]`
   swap `1` and `4`
6. `[3, 1, 4, 2, 5]`
   swap `2` and `4`
7. `[3, 1, 2, 4, 5]`
   swap `1` and `3`
8. `[1, 3, 2, 4, 5]`
   swap `2` and `3`
9. `[1, 2, 3, 4, 5]`
10. `[1, 2, 3, 4, 5]`
