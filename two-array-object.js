'use strict';

/** Takes in two arrays of keys and values, returns and object with paired
 * keys and values.
 */

function twoArrayObject(keys, values) {
  const newObj = {};
  let index = 0;

  for (let key of keys) {               // O(n)
    newObj[key] = null;
  }

  for (let key in newObj) {             // O(n)
    if (index <= values.length - 1) {
      newObj[key] = values[index];
      index++;
    }
  }

  return newObj;
}
