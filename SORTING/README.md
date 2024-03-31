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

<br>

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

Finally we got the sorted array in `ascending` order (from smallest to largest). Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

## Bubble Sort pseudocode

- Start looping from with a variable called `i` the end of the array towards the beginning
- Start an inner loop with a variable called `j` from the beginning until `i - 1`
- If `arr[j]` is greater than `arr[j + 1]`, swap those two values
- Return the sorted array

## Big O of bubble sort

In general, Time Complexity of bubble sort is `O(n^2)`, because it involves nested loops which run in `O(n)` time, so `O(n) * O(n) = O(n * n) = O(n^2)`. Space Complexity of bubble sort algorithm is `O(1)` since it doesn't require any extra space. Generally it's ok to use bubble sort when we are working with small data sets, but for large data sets it's not a good choice, because it's pretty inefficient.

## Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

<br>

For example input is `[5, 3, 4, 1, 2]` and output is `[1, 2, 3, 4, 5]`

## Selection Sort pseudocode

- Store the first element as the smallest `index` value you have seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new `minimum` and continue until the end of the array
- If the `minimum` is not the value `index` you intially began with, swap the two values
- Repeat previous step with the next element until the array is sorted

## Big O of selection sort

In general, Time Complexity of selection sort is `O(n^2)`, because it involves nested loops just like bubble sort. An outer loop runs in `O(n)` time, an inner loop runs in `O(n)` time as well, so time complexity would be `O(n) * O(n) = O(n * n) = O(n^2)`. Space Complexity of selection sort is `O(1)`, since it doesn't require any extra space.

## Insertion Sort

Builds up the sort by gradually creating a larger (portion) half which is always sorted.

## Insertion Sort pseudocode

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the second portion (i.e. the left side) to place the element in the correct space
- Repeat until the array is sorted

## Big O of insertion sort

Time Complexity of insertion sort is `O(n^2)` and Space Complexity of insertion sort is `O(1)`

## Merge Sort

It's a combination of two things - `merging` and `sorting`. Exploits the fact that arrays of 0 or 1 element are always sorted. Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

```
    [8, 3, 5, 4, 7, 6, 1, 2]
    -------------------------
   [8, 3, 5, 4]      [7, 6, 1, 2]
   ---------------------------
  [8, 3] [5, 4]      [7, 6]  [1, 2]
   ----------------------------
 [8] [3] [5] [4]     [7] [6] [1] [2]
   ----------------------------
 [3, 8]  [4, 5]      [6, 7]  [1, 2]
 ------------------------------
 [3, 4, 5, 8]        [1, 2, 6, 7]
 -------------------------------
    [1, 2, 3, 4, 5, 6, 7, 8]
```

## Merging Arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
- This function should run in `O(n + m)` time and `O(n + m)` space and should not modify the parameters passed to it

## pseudocode for merge

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at..
- If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
- If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
- Once we exhaust one array, push in all remaining values from the other array

## mergeSort pseudocode

- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array.

## Big O of merge sort algorithm

- In the best case, Time Complexity is `O(n log n)`
- In the average case, Time Complexity is `O(n log n)`
- In the worst case, Time Complexity is `O(n log n)`
- In the best case, Space Complexity is `O(1)`
- In the average case, Space Complexity is `O(1)`
- In the worst case, Space Complexity is `O(n)`

Merge Sort is a fast sorting algorithm and can be used to sort large sets of data

## Quick Sort

- Like merge sort, it exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by selecting one element (called the `pivot`) and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

## Pivot helper

- In order to implement quick sort, It's useful to first implement a function responsible for arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
- The order of elements on either side of the pivot doesn't matter
- The helper function should do this `in place`, it should not create a new array
- When complete, the helper should return the index of the pivot

## Picking a pivot (Quick Sort)

- The runtime of quick sort depends in part on how one selects the pivot
- Ideally the pivot should be choosen so that it's roughly the median value in the data set you're sorting
- For simplicity, we'll always choose the pivot to be the first element which has some consequences

## Pivot pseudocode

- It will help to accept three arguments: `an array, a start index and end index` (these can default to 0 and the `array length - 1` respectively)
- Grap the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end:
- If the pivot is greater than the current element, increment the pivot index variable and then swap the current element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index

## Quick Sort pseudocode

- Call the pivot helper on the array
- When the helper function returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
- Your base case occurs when you consider a subarray with less than 2 elements

## Big O of quick sort

- In the best case, Time Complexity is: `O(n log n)`
- In the average case, Time Complexity is: `O(n log n)`
- In the worst case, Time Complexity is: `O(n^2)`
- In all cases, Space Complexity is `O(1)` (constant)

Quick Sort is highly efficient sorting algorithm and can be used to sort large data sets. In fact when memory efficiency is critical, In that case it might be really helpful, because it doesn't require any extra space

## Radix Sort (not comparison based)

Radix Sort is a special sorting algorithm that works on lists of numbers. It never makes comparisons between elements! It exploits the fact that information about the size of a number is encoded in the number of `digits`. More digits means a bigger number!

## Radix Sort helpers

In order to implement radix sort, It's helpful to build a few helper functions first:

- `getDigit(num, place)`: returns the digit in num at the given place value
- `digitCount(num)`: returns the number of digits in num
- `mostDigits(nums)`: given an array of numbers, returns the number of digits in the largest numbers in the list

## Radix Sort pseudocode

- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from `k = 0` to this largest number of digits
- For each iteration of the loop:
- Create `buckets` for each digit `(0 to 9)`
- Place each number in the corresponding bucket based on its `k`th digit.
- Replace our existing array with values in our buckets, starting with 0 and going up to 9.
- Return list at the end

## Big O of radix sort

- In the best case, Time Complexity is `O(nk)`
- In the average case, Time Complexity is `O(nk)`
- In the worst case, Time Complexity is `O(nk)`
- In all of the cases, Space Complexity is `O(n + k)`

Radix Sort is relatively easy to implement and predictable sorting algorithm. `n - length of array k - number of digits (average)`
