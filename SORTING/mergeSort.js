'use strict';

/*
    Time Complexity: O(n + m)
    Space Complexity: O(n + m)
*/
function merge(values1, values2) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < values1.length && j < values2.length) {
    if (values1[i] < values2[j]) {
      result.push(values1[i]);
      i++;
    }
    if (values2[j] < values1[i]) {
      result.push(values2[j]);
      j++;
    }
  }

  while (i < values1.length) {
    result.push(values1[i]);
    i++;
  }

  while (j < values2.length) {
    result.push(values2[j]);
    j++;
  }

  return result;
}

/*
    Time Complexity: O(n log n)
    Space Complexity: O(n)
*/
function mergeSort(values) {
  if (values.length <= 1) return values;

  const mid = Math.floor(values.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
}

console.log(mergeSort([10, 3, 40, 34, 15, 67, 43]));
