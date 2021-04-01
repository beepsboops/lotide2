// ASSERT EQUAL FUNCTION

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `😡 Assertion Failed: ${actual} !== ${expected}`;
  } else if (actual === expected) {
    return `👍 Assertion Passed: ${actual} === ${expected}`;
  }
};

// COUNTLETTERS FUNCTION

const countLetters = function(string) {

  // Create variable to store an empty object for results // const result = {}
  // Test keys:  a: 'bob', b: 'susan'
  let result = {};

  // Convert original string to another string without spaces and store as variable // stringWithoutSpaces
  const stringWithoutSpaces = string.split(' ').join('');
  // console.log(stringWithoutSpaces)

  // Loop through stringWithoutSpaces
  for (let i = 0; i < stringWithoutSpaces.length; i++) {

    // Create variable to store stringWithoutSpaces[i] for ease of use/readability
    let char = stringWithoutSpaces[i];
    // console.log(char)
    
    // If char doesn't exist in result, add it as a key with the value 1
    //If char does exist in result, increment the key value by 1
    if (!(char in result)) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  }
  return result;
};

// TEST CODE

console.log(countLetters("lighthouse in the house"));

/*

Should return

{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

*/