'use strict';

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
function partion(values, start = 0, end = values.length - 1) {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  const pivot = values[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > values[i]) {
      swapIdx++;
      swap(values, swapIdx, i);
    }
  }

  swap(values, start, swapIdx);

  return swapIdx;
}

/*
    Time Complexity (average): O(n log n) 
    Time Complexity (worst-case): O(n^2)
    Space Complexity: O(1)
*/
function quickSort(values, left = 0, right = values.length - 1) {
  if (left < right) {
    let pivotIndex = partion(values, left, right);
    // left
    quickSort(values, left, pivotIndex - 1);
    // right
    quickSort(values, pivotIndex + 1, right);
  }

  return values;
}

console.log(quickSort([10, 3, 40, 34, 15, 67, 43]));
