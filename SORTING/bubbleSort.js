'use strict';

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/
function bubbleSort(values) {
  for (let i = values.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (values[j] > values[j + 1]) {
        swap(values, j, j + 1);
      }
    }
  }
  return values;
}

console.log(bubbleSort([10, 3, 40, 34, 15, 67, 43]));
