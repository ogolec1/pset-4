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
length = height + 1;
let output = "";

for (let b = 2; b <= length; b++) {
  for (let a = length - b; a > 0; a -= 1) {
    output += " ";
  }
  for (let c = b; c > 0; c -= 1) {
    output += "#";
  }
  output += "  ";
  for (let c = b; c > 0; c -= 1) {
    output += "#";
  }
  output += "\n";
}

console.log(output);
