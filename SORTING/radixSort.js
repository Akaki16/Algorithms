'use strict';

/*
    Time Complexity: O(1)
    Space Complexity: O(1)
*/
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/
function digitCount(num) {
  return String(num).length;
}

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
function mostDigits(nums) {
  let maxDigits = digitCount(nums[0]);

  for (let num of nums) {
    if (digitCount(num) > maxDigits) {
      maxDigits = digitCount(num);
    }
  }

  return maxDigits;
}

function radixSort(nums) {
  const maxDigits = mostDigits(nums);

  for (let k = 0; k < maxDigits; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([10, 3, 40, 34, 15, 67, 43]));
