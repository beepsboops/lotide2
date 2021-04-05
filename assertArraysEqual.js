// REQUIRE

// In charge of the "doing"
const eqArrays = require("./eqArrays");

// ASSERTARRAYSEQUAL FUNCTION
// Is "requiring" eqArrrays function and then is simply/only in charge of printing

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`😡 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  }
};

// EXPORT

module.exports = assertArraysEqual;