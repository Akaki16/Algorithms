'use strict';

/*
    Time Complexity: O(1)
    Space Complexity: O(1)
*/
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

logAtMost10(50);
