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

// MIDDLE FUNCTION

const middle = function(arr) {
  const numOfElements = arr.length;
  const newArr = [];
  if (numOfElements <= 2) {
    return newArr;
  }
  const oddIndex = (arr.length - 1) / 2;
  const evenIndex1 = (arr.length / 2) - 1;
  const evenIndex2 = arr.length / 2;
  if (!(numOfElements % 2 === 0)) {
    newArr.push(arr[oddIndex]);
  } else {
    newArr.push(arr[evenIndex1], arr[evenIndex2]);
  }
  return newArr;
};

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