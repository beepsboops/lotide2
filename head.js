const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

// HEAD FUNCTION

const head = function(array) {
  return array[0];
};

// TEST CODE

console.log(head(["Hello", "Lighthouse", "Labs"]));
console.log(head([5,6,7]));

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([2]), 5));
console.log(assertEqual(head([]), 5));