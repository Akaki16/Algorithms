'use strict';

/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/
function naiveSearch(string, pattern) {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== string[i + j]) break;
      if (j === pattern.length - 1) return true;
    }
  }
}

console.log(naiveSearch('abracadaabra', 'cada'));
