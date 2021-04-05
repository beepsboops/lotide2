// REQUIRE

const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true // Assertion Passed
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false // Assertion Failed

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true // Assertion Passed
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false // Assertion Failed