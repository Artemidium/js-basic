/* eslint-disable no-undef, no-var, vars-on-top, no-use-before-define */
// Declare two variables which will be same-names but contain different values.
// eslint-disable-next-line no-constant-condition
if (true) {
  const test = true; // Declare a variable which will be encapsulated from global scope.
  console.log(test);
}

test = 10;
console.log(test);
var test; // Declare a variable which will appear in global object with hoisting.
