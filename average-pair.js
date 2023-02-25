'use strict';

/* Takes an array of sorted numbers and target average. If any two values in array are equal to the target,
 * returns true, otherwise return false
 **/

function averagePair(sortedNums, targetAvg) {
  let left = 0;
  let right = sortedNums.length - 1;

  while (left < right) {
    let currAvg = (sortedNums[left] + sortedNums[right]) / 2;

    if (currAvg === targetAvg) {
      return true;
    }

    if (currAvg < targetAvg) {
      left++;
    } else {
      right--;
    }

  }

  return false;

}

