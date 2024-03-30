'use strict';

/*
    Time Complexity: O(1)
    Space Complexity: O(1)
*/
const addUpTo1 = function (n) {
  return (n * (n + 1)) / 2;
};

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
const addUpTo2 = function (n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total = total + i;
  }

  return total;
};

console.log('addUpTo1:', addUpTo1(5));
console.log('addUpTo2:', addUpTo2(5));

console.log('addUpTo1:', addUpTo1(1_000_000_000));
console.log('addUpTo2:', addUpTo2(1_000_000_000));
