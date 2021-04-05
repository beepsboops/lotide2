// REQUIRE

const assertEqual = require("./assertEqual")

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

// EXPORT

module.exports = eqArrays;