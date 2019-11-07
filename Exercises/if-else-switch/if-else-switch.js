const codeToMissingComplexityElement = {
  0: 'length',
  1: 'capital letter',
  2: 'special character',
  3: 'cannot be empty'
};

function getMissingComplexityElementCode(password) {
  if (!password) {
    return 3;
  }
  if (password.length <= 8) {
    return 0;
  }
  if (password === password.toLowerCase()) {
    return 1;
  }
  if (!password.match(/.*[^A-Za-z0-9]/)) {
    return 2;
  }
  return 'Good job!';
}

function getErrorMessage(getMissingComplexityElementCode) {
  // eslint-disable-next-line default-case
  switch (getMissingComplexityElementCode) {
  case 3:
    console.log(codeToMissingComplexityElement[3]);
    break;
  case 0:
    console.log(codeToMissingComplexityElement[0]);
    break;
  case 1:
    console.log(codeToMissingComplexityElement[1]);
    break;
  case 2:
    console.log(codeToMissingComplexityElement[2]);
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
