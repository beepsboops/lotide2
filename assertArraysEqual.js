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

// TEST CODE

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false
