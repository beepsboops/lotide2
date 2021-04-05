// REQUIRE

const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE

// For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

// For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// Using the assertArraysEqual function for testing our middle function
console.log(assertArraysEqual((middle([1, 2, 3, 4])), [2, 3])); // => Assertion Passed
console.log(assertArraysEqual((middle([1, 2, 3, 4])), [6, 7])); // => Assertion Failed