// ASSERT EQUAL FUNCTION

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `😡 Assertion Failed: ${actual} !== ${expected}`;
  } else if (actual === expected) {
    return `👍 Assertion Passed: ${actual} === ${expected}`;
  }
};

// FINDKEY FUNCTION

const findKey = function(object, callback) {
  
  // Create variable that will store keys of object
  let keys = Object.keys(object);

  // Loop through object
  for (let key of keys) {
    
    // Pass key into callback
    // If callback === true
    if (callback(object[key])) {
      
      // Return key
      return key;
      
    }
  }
  // If key not found, return undefined
  return undefined;
};

// TEST CODE

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 7 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 6 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

console.log("test1:", test1); // => "noma"
console.log("test2:", test2); // => "undefined"

console.log(assertEqual(test1, "noma")); // => Assertion Passed
console.log(assertEqual(test1, "Ora")); // => Assertion Failed