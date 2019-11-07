// Assign string with unicode to a variable.
const unicodeStr = '\u03A8';
console.log(unicodeStr);

// Declare a variable with string with escaped symbols.
const escapedStr = 'It\'s\tmy\nhomework\t!';
console.log(escapedStr);

// Declare a variable which will contain name of your favourite animal.
const myFavouriteAnimal = 'cat';
console.log(`My favourite animal is a ${myFavouriteAnimal}!`);

// Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name with capitals first letters.
const myFavouriteWriter = 'jerome david salinger';
console.log(myFavouriteWriter.split(' ').map(element => element[0].toUpperCase() + element.slice(1)).join(' '));

/*
Declare a function which will receive password string. Check is password strong enough:
  - should contain at least one capital letter;
  - length no less than 8 characters.
  - should contain at leas one special character.
 */
function receivePassword(password) {
  if (password === password.toLowerCase()) {
    console.log('Password should contain at least one capital letter');
  }
  if (password.length <= 8) {
    console.log('Password length should be no less than 8 characters');
  }
  if (!password.match(/.*[^A-Za-z0-9]/)) {
    console.log('Password should contain at least one special character');
  } else {
    console.log('Password is strong!');
  }
}

receivePassword('123');
