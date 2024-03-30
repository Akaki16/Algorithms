'use strict';

/*
    Time Complexity: O(1)
    Space Complexity: O(1)
*/
function addUpTo1(n) {
  return (n * (n + 1)) / 2;
}

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
function addUpTo2(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total = total + i;
  }

  return total;
}

console.log(addUpTo1(10));
console.log(addUpTo2(10));
