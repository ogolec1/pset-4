const readlineSync = require("readline-sync");

let value;
const min = 9999999999999999;
const max = 100000000000;
let creditCard = 0;
let firstValue = 0;
let sum = 0;
let secondValue = 0;
let thirdValue = 0;
let fourthValue = 0;
let fifthValue = 0;
let sixthValue = 0;
let digit = 0;

console.log("")

do {
  creditCard = Number(readlineSync.question("Number: "))
} while (creditCard < max || creditCard > min ||
  Number.isNaN(creditCard) ||
  !Number.isInteger(creditCard))

let creditCard2 = creditCard;
let creditCard3 = creditCard;

while (creditCard2 > 0) {
  if (creditCard2 > 0) {
    value = Math.floor((creditCard2 % 100) / 10);
    creditCard2 = Math.floor(creditCard2 / 100);
    fourthValue = value * 2;
    digit++
    if (fourthValue < 10) {
      sum = sum + fourthValue
    }

    if (fourthValue >= 10) {
      firstValue = fourthValue / 10;
      secondValue = Math.floor(firstValue);
      thirdValue = fourthValue % 10;
      sum = sum + secondValue + thirdValue;
    }
  }
}

while (creditCard3 > 0) {
  if (creditCard3 === creditCard) {
    fifthValue = (creditCard3 % 10);
    creditCard3 = Math.floor((creditCard3 / 10));
    sum = sum + fifthValue
    continue;
  }

  if (creditCard3 !== creditCard) {
    sixthValue = Math.floor((creditCard3 % 100) / 10);
    creditCard3 = Math.floor((creditCard3 / 100))
    sum = sum + sixthValue
    digit++
  }
}

if (sum % 10 !== 0) {
  console.log("\nInvalid.\n")
}

while (creditCard > 0) {
  if (digit === 15 && (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 34 ||
    (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 37) {
    console.log("\nAmex.\n")
    break;
  }

  if ((digit === 16) && (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 51 ||
    (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 52 ||
    (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 53 ||
    (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 54 || (Math.floor(creditCard / (Math.pow(10, (digit - 2))))) === 55) {
    console.log("\nMastercard.\n")
    break;
  }

  if ((Math.floor(creditCard / (Math.pow(10, (digit - 1))))) === 4 && (digit === 13 ||
      digit === 16)) {
    console.log("\nVisa.\n")
    break;
  }

  if (digit === 15 ||
    digit === 16 ||
    digit === 13 || creditCard / (Math.pow(10, (digit - 1)) === 4 ||
      creditCard / (Math.pow(10, (digit - 2)) === 51 ||
        creditCard / (Math.pow(10, (digit - 2))) === 52 ||
        creditCard / (Math.pow(10, (digit - 2))) === 53 || creditCard / (Math.pow(10, (digit - 2))) === 54 ||
        creditCard / (Math.pow(10, (digit - 2))) === 55) || creditCard / (Math.pow(10, (digit - 2)) === 34 ||
        creditCard / (Math.pow(10, (digit - 2))) === 37))) {
    console.log("\nInvalid.\n")
    break;
  }
}
