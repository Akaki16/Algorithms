'use strict';

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
function linearSearch(values, targetValue) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === targetValue) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 5));
