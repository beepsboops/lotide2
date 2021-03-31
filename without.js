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

// ASSERTARRAYSEQUAL FUNCTION

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`😡 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  }
};

// WITHOUT FUNCTION

const without = function(sourceArr, itemsToRemoveArr) {
  // create a variable called newArr to store the new array
  

  // loop over itemsToRemoveArr

  // create a variable called itemToRemove store the value at index 0
  for (let itemToRemove of itemsToRemoveArr) {
    let newArr = [];
    
    // console.log (itemToRemove) // works, returns 1
    
    // create another loop (nested)
    for (let sourceItem of sourceArr) {
      
      
      // console.log(sourceItem) // works, returns 1 2 3
    
      // create a conditonal: if itemToRemove matches any value in sourceArr
      if (itemToRemove !== sourceItem) {
        console.log(sourceItem)
        // push that value into newArr
        
        for (let newArrItem of newArr) {
          if (sourceItem !== newArrItem) {
            // console.log(newArrItem)
            newArr.push(sourceItem);
          }
        }
        
        
      }return newArr;
    } 
  } 
  // return newArr
  
};


// TEST CODE

// console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);