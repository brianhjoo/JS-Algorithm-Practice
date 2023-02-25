'use strict';

/** Takes in a word and a group of letters, and returns true if the word
 * can be constructed from the values of letters.
 */

function canConstructWord(word, letters) {
  const freqLetters = generateFrequencyCounter(letters);

  for (let char of word) {
    if (!freqLetters[char] || freqLetters[char] === 0) {
      return false;
    } else {
      freqLetters[char]--;
    }
  }

  return true;
}

/** Takes in an iterable and generates a frequency counter */

function generateFrequencyCounter(items) {
  const freqTracker = {};

  for (let letter of items) {
    const counter = freqTracker[letter] || 0;
    freqTracker[letter] = counter + 1;
  }

  return freqTracker;
}