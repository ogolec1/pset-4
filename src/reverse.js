const readlineSync = require("readline-sync");

const min = 1;
const max = Number.MAX_SAFE_INTEGER;
let number = 0;
console.log("")
do {
  number = Number(readlineSync.question("Positive integer: "));
} while (Number.isNaN(number) ||
  !(number <= max && number >= min) ||
  !Number.isInteger(number));

let output = "\n";

while (number > 0) {
  let digit = number % 10;
  if (Math.floor(number / 10) <= 0) {
    output = output + String(digit) + ".\n";
  } else {
    output = output + String(digit) + ", ";
  }
  number = Math.floor(number / 10);
}

console.log(output);
