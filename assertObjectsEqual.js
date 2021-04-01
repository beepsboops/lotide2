// EQARRAYS FUNCTION

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

// EQOBJECTS FUNCTION

const eqObjects = function(object1, object2) {
  const listOfKeys1 = Object.keys(object1);
  const listOfKeys2 = Object.keys(object2);
  if (listOfKeys1.length !== listOfKeys2.length) {
    return false;
  }
  for (let key of listOfKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

// ASSERTOBJECTEUQAL FUNCTION

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return `👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};


// TEST CODE

console.log(assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' })); // => Assertion Passed
console.log(assertObjectsEqual({ a: '1', b: 2 },{ b: 4, a: '3' })); // => Assertion Failed