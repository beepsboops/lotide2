// ASSERT EQUAL FUNCTION

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `😡 Assertion Failed: ${actual} !== ${expected}`;
  } else if (actual === expected) {
    return `👍 Assertion Passed: ${actual} === ${expected}`;
  }
};

// FINDKEYBYVALUE FUNCTION

const findKeyByValue = function(obj, searchTerm) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (searchTerm === obj[key]) {
      return key;
    }
  }
};

// TEST CODE

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")); // => "comedy"
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse")); // => "sci_fi"

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")); // => Assertion Passed
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)); // => Assertion Passed