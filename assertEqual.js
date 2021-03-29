// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE

console.log("-------");
console.log("Identical strings");
assertEqual("lunch", "lunch");
console.log("-------");

console.log("Non-identical strings");
assertEqual("Lighthouse Labs", "Bootcamp");
console.log("-------");

console.log("Identical numbers");
assertEqual(1, 1);
console.log("-------");

console.log("Non-identical numbers");
assertEqual(132, 456);
console.log("-------");