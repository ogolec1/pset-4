const readlineSync = require("readline-sync");

let x = 0;
let sum = 0;
let value = 0;


console.log("");

while (value > Number.MAX_SAFE_INTEGER ||
  !Number.isInteger(value) ||
  value !== -1) {
  value = Number(readlineSync.question("Non-negative integer: "));

  if (value !== -1) {
    sum = sum + value;
    x = x + 1
  }
}
let average = sum / x
average = average.toLocaleString('en', {
  minimumFractionDigits: 3,
  maximumFractionDigits: 3
});

console.log("\n" + average + ".\n");
