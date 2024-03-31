'use strict';

/*
    Time Complexity: O(log n)
    Space Complexity: O(1)
*/
function binarySearch(values, targetValue) {
  let left = 0;
  let right = values.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (targetValue === values[mid]) {
      return mid;
    }

    // Search left
    if (targetValue < values[mid]) {
      right = mid - 1;
    }

    // Search right
    if (targetValue > values[mid]) {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
