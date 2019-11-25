const readlineSync = require("readline-sync");

let a = 1;
let b = 0;
let integer = 0;
let result = "";

console.log("");

do {
  integer = Number(readlineSync.question("Positive integer: "));
} while (integer <= 0 ||
  integer > Number.MAX_SAFE_INTEGER ||
  Number.isNaN(integer) || !Number.isInteger(integer));

while (a <= Math.floor(Math.sqrt(integer))) {

  if (a <= integer) {
    b = integer % a

    if (a === Math.floor(Math.sqrt(integer))) {
      result = result + a + ". "
      break;

    } else if (b === 0) {
      result = result + a + ", " + (integer / a) + ", "
    }
    a++
  }
}


console.log("\n" + result + "\n");
