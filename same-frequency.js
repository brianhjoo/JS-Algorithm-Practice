'use strict';

/** Takes in two numbers and returns true if both numbers have the same
 * frequency of digits
 */
function sameFrequency(num1, num2) {

  if (num1.length !== num2.length) {
    return false;
  }


  let string1 = num1.toString()
  let string2 = num2.toString()

  const freq1 = generateFrequencyCounter(string1);
  const freq2 = generateFrequencyCounter(string2);

  for (let num in freq1) {

    if (!num in freq2) {
      return false;
    }

    if (freq1[num] !== freq2[num]) {
      return false;
    }
  }

  return true;
}


/** Takes in an iterable and generates a frequency counter */

function generateFrequencyCounter(items) {
  const freqTracker = {};

  for (let item of items) {
    const counter = freqTracker[item] || 0;
    freqTracker[item] = counter + 1;
  }

  return freqTracker;
}