const readlineSync = require("readline-sync");

const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;

let lowerBound;
let upperBound;

do {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
} while (Number.isNaN(lowerBound) || Number.isNaN(upperBound) || lowerBound > upperBound || lowerBound < min || upperBound > max || !Number.isInteger(lowerBound) || !Number.isInteger(upperBound));

// add all even numbers between lowerBound and upperBound

if {
  lowerBound % 2 | === 0;
}
