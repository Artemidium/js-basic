const codeToMissingComplexityElement = {
  0: 'length',
  1: 'capital letter',
  2: 'special character',
  3: 'cannot be empty'
};

function getMissingComplexityElementCode(password) {
  if (!password) {
    return codeToMissingComplexityElement[3];
  }
  if (password.length <= 8) {
    return codeToMissingComplexityElement[0];
  }
  if (password === password.toLowerCase()) {
    return codeToMissingComplexityElement[1];
  }
  if (!password.match(/.*[^A-Za-z0-9]/)) {
    return codeToMissingComplexityElement[2];
  }
  return 'Good job!';
}

function getErrorMessage(getMissingComplexityElementCode) {
  // eslint-disable-next-line default-case
  switch (getMissingComplexityElementCode) {
  case 'cannot be empty':
    console.log('Password cannot be empty. Please enter a password.');
    break;
  case 'length':
    console.log('Password should contain no less than 8 characters.');
    break;
  case 'capital letter':
    console.log('Password should contain at least one capital letter.');
    break;
  case 'special character':
    console.log('Password should contain at leas one special character.');
    break;
  default:
    console.log('Password is strong!');
  }
}

function enterPassword(password) {
  console.log(getMissingComplexityElementCode(password));
  getErrorMessage(getMissingComplexityElementCode(password));
}

enterPassword('');
