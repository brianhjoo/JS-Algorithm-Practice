'use strict';

/* Takes an array and target average. If any two values in array are equal to the target,
 * returns true, otherwise return false
 **/
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let currAvg = (nums[left] + nums[right]) / 2;

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

