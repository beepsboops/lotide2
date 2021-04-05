// REQUIRE

const assertEqual = require("../assertEqual")

// TEST CODE

console.log("-------");
console.log("Identical strings");
console.log(assertEqual("lunch", "lunch"));
console.log("-------");

console.log("Non-identical strings");
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log("-------");

console.log("Identical numbers");
console.log(assertEqual(1, 1));
console.log("-------");

console.log("Non-identical numbers");
console.log(assertEqual(132, 456));
console.log("-------");