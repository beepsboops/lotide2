// ASSERT EQUAL FUNCTION

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

// TAIL FUNCTION

const words = ["Yo Yo", "Lighthouse", "Labs"];

const tail = function(words) {
  let tailOfWords = words.slice(1);
  return tailOfWords;
};

// TEST CODE

// Test Case: Check the original array
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!