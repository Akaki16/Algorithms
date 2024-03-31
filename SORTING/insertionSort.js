'use strict';

/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/
function insertionSort(values) {
  for (let i = 1; i < values.length; i++) {
    let currentVal = values[i];
    let j;
    for (j = i - 1; j >= 0 && currentVal < values[j]; j--) {
      values[j + 1] = values[j];
    }
    values[j + 1] = currentVal;
  }
  return values;
}

console.log(insertionSort([10, 3, 40, 34, 15, 67, 43]));
