// Assign by hand same value to 3 variables in binary, octal and hexadecimal format.
const binary = 1110101010111;
const octal = 16527;
const hexadecimal = '1d57';

console.log(parseInt(binary, 2));
console.log(parseInt(octal, 8));
console.log(parseInt(hexadecimal, 16));

// Implement function `extractNumbers` which will leave only numbers in passed string.
function extractNumbers(text) {
  // eslint-disable-next-line radix
  return parseInt(text);
}

console.log(extractNumbers('3423sdkfshdkfhsdkf'));

// Declare a variable with decimal value and convert to binary, octal and hexadecimal.
const decimal = 666;

console.log(decimal.toString(2));
console.log(decimal.toString(8));
console.log(decimal.toString(16));

// use Math.random to generate random value from 0 to 100.
console.log(Math.random() * 100);
