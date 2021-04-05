// REQUIRE

// const head = require("../head");
const assertEqual = require("../assertEqual");

// TEST CODE // ORIGINAL

// console.log(head(["Hello", "Lighthouse", "Labs"])); // => Hello
// console.log(head([5,6,7])); // => 5

// console.log(assertEqual(head([5,6,7]), 5)); // => Assertion Passed: 5 === 5
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")); // => Assertion Passed: Hello === Hello

// console.log(assertEqual(head([5]), 5)); // => Assertion Passed: 5 === 5
// console.log(assertEqual(head([2]), 5)); // => Assertion Failed: 2 !== 5
// console.log(assertEqual(head([]), 5)); // => Assertion Failed: undefined !== 5

// TEST CODE // MOCHA CHAI

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  
  it("returns 5", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("returns Hello", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });  

  it("returns 5 === 5", () => {
    assert.strictEqual((head([5]), 5), 5);
  });

  it("returns 2 !== 5", () => {
    assert.notStrictEqual((head([2])), 5);
  });

  it("returns undefined !== ", () => {
    assert.notStrictEqual((head([]), 5));
  })

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

});