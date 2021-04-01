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

// LETTER POSITIONS FUNCTION

const letterPositions = function(sentence) {
  const results = {};
  const stringWithoutSpaces = sentence.split(' ').join('');
  for (let i = 0; i < stringWithoutSpaces.length; i++) {
    let char = stringWithoutSpaces[i];
    if (!(char in results)) {
      results[char] = [i];
    } else {
      results[char].push([i]);
    }
  }
  return results;
};


// TEST CODE

console.log(letterPositions("lighthouse in the house"));
/*

Should return

{
  l: [ 0 ],
  i: [ 1, 10 ],
  g: [ 2 ],
  h: [ 3, 5, 13, 15],
  t: [ 4, 12 ],
  o: [ 6, 16 ],
  u: [ 7, 17 ],
  s: [ 8, 18 ],
  e: [ 9, 14, 19 ],
  n: [ 11 ]
}

*/

console.log(assertArraysEqual(letterPositions("hello").e, [1])); // => Assertion Passed