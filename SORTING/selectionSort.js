'use strict';

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/
function selectionSort(values) {
  for (let i = 0; i < values.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[smallest]) {
        smallest = j;
      }
    }
    swap(values, i, smallest);
  }
  return values;
}

console.log(selectionSort([10, 3, 40, 34, 15, 67, 43]));
