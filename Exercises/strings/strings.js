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
// eslint-disable-next-line max-len
console.log(myFavouriteWriter[0].toUpperCase() + myFavouriteWriter.slice(1, 7) + myFavouriteWriter[7].toUpperCase() + myFavouriteWriter.slice(8, 13) + myFavouriteWriter[13].toUpperCase() + myFavouriteWriter.slice(14));

// Additional tasks are difficult for me now. I will do them later.
