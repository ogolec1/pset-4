const readlineSync = require("readline-sync");

var length;
const max = 24;
const min = 1;

console.log();
do {
  height = Number(readlineSync.question("Height: "));
} while (height < min ||
  height > max ||
  Number.isNaN(height) ||
  !Number.isInteger(height));

console.log();
length = ++height;
let output = "";

for (let c = 2; c <= length; c++) {
  for (let a = length - c; a > 0; a -= 1) {
    output += " ";
  }
  for (let b = c; b > 0; b -= 1) {
    output += "#";
  }
  output += "\n";
}

console.log(output);
