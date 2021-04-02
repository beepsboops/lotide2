// EQARRAYS FUNCTION
// In charge of the "doing"

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true; // Critial to make sure this is outside loop
  }
};

// ASSERTARRAYSEQUAL FUNCTION
// Is "requiring" eqArrrays function and then is simply/only in charge of printing

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`😡 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  }
};

// TAKEUNTIL FUNCTION

const takeUntil = function(array, callback) {

  // Create variable that stores an empty array that will eventually hold our resulting array // newArr
  let newArr = [];

  // Loop through array
  for (let element of array) {

    // Pass array[i] into callback function
    // If callback === false
    if (!callback(element)) {
      
      // Push array[i] into newArr
      newArr.push(element);
    
      // Else break out of loop;
    } else {
      return newArr;
    }
  }
};

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* Expected Output

[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])); // => Assertion Passed
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])); // => Assertion Passed
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Nanaimo' ])); // => Assertion Failed