'use strict';

function countDown(n) {
  if (n <= 0) {
    console.log('all done');
    return;
  }
  console.log(n);
  n--;
  countDown(n);
}

countDown(10);
