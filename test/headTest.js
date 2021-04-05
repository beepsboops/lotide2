// REQUIRE

const head = require("../head");
const assertEqual = require("../assertEqual");

// TEST CODE

console.log(head(["Hello", "Lighthouse", "Labs"]));
console.log(head([5,6,7]));

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([2]), 5));
console.log(assertEqual(head([]), 5));