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

// MAP FUNCTION

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CODE

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(map(["apple", "orange", "kiwi"], word => word[0]), ["a", "o", "k"])); //  => Assertion Passed
console.log(assertArraysEqual(map(["apple", "orange", "kiwi"], word => word.length), [5, 6, 4])); //  => Assertion Passed
console.log(assertArraysEqual(map([2, 7, 12], num => num * 2), [4, 14, 24])); //  => Assertion Passed
console.log(assertArraysEqual(map([2, 7, 12], num => num * 2), [4, 14, 25])); //  => Assertion Failed