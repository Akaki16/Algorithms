'use strict';

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}

logAtLeast10(5);
