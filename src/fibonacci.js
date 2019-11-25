const readlineSync = require("readline-sync");

let x = 0;
let number = 0;


console.log("");

do {
  number = Number(readlineSync.question("Positive integer: "));
} while (number < 1 ||
  number > 78 ||
  Number.isNaN(number) ||
  !Number.isInteger(number));

x = (Math.pow(1.618034, number) - (Math.pow(-0.618034, number))) / Math.sqrt(5)

if ((x * 10) % 10 < 5) {
  Math.floor(x)
}

if ((x * 10) % 10 >= 5) {
  Math.ceil(x)
}

result = x.toLocaleString('en', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

console.log("\n" + result + ".\n");
