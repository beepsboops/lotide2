// REQUIRE

const tail = require("../tail");
const assertEqual = require("../assertEqual");

// TEST CODE ORIGINAL

// const words = ["Yo Yo", "Lighthouse", "Labs"];

// // Test Case: Check the original array
// console.log(tail(words)); // no need to capture the return value since we are not checking it // => ["Lighthouse", "Labs"]
// console.log(assertEqual(words.length, 3)); // original array should still have 3 elements! // => 3

// TEST CODE MOCHA CHAI

const assert = require("chai").assert;
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {

  it(`returns ["Lighthouse", "Labs"]`, () => { 
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it("returns 3", () => {
    assert.strictEqual(words.length, 3);
  });

});