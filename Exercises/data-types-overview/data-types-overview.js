/* eslint-disable no-new-wrappers, no-new-object, no-array-constructor */
// Declare a variable on each type using two options: plain creation, creation with constructor.
const num1 = 455;
const str1 = 'fdgdfg';
const boo1 = true;
const nul1 = null;
const obj1 = { a: 1 };

const num2 = new Number();
const str2 = new String();
const boo2 = new Boolean();
const obj2 = new Object();

// Use operator typeof on each of them.
console.log(typeof num1);
console.log(typeof str1);
console.log(typeof boo1);
console.log(typeof nul1);
console.log(typeof obj1);

console.log(typeof num2);
console.log(typeof str2);
console.log(typeof boo2);
console.log(typeof obj2);

// Demonstrate object's references.
const someObj = {
  a: 1,
  b: 2,
  c: 3
};
const otherObj = someObj;
otherObj.d = 4;

console.log(someObj);
console.log(otherObj);
console.log(someObj === otherObj);

// Demonstrate string's backticks features.
const name = 'Timi';

console.log(`My name is ${name}!`);

// Declare an array containing different data types.
const someArray = [100, 'asdaf', true, null, undefined, { a:1 }];

console.log(someArray);
