// Declare a variable on each type using two options: plain creation, creation with constructor.
let num1 = 455;
let str1 = 'fdgdfg';
let boo1 = true;
let nul1 = null;
let und1 = undefined;
let obj1 = { a: 1 };

let num2 = new Number();
let str2 = new String();
let boo2 = new Boolean();
let obj2 = new Object();

// Use operator typeof on each of them.
console.log(typeof num1);
console.log(typeof str1);
console.log(typeof boo1);
console.log(typeof nul1);
console.log(typeof und1);
console.log(typeof obj1);

console.log(typeof num2);
console.log(typeof str2);
console.log(typeof boo2);
console.log(typeof obj2);

// Demonstrate object's references.
let someObj = {
  a: 1,
  b: 2,
  c: 3
};
let otherObj = someObj;
otherObj.d = 4;

console.log(someObj);
console.log(otherObj);
console.log(someObj === otherObj);

// Demonstrate string's backticks features.
let name = 'Timi';

console.log(`My name is ${name}!`);

// Declare an array containing different data types.
let someArray = [100, 'asdaf', true, null, undefined, {a:1}];

console.log(someArray);
