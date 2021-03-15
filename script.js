// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Declare a new function on line 3
function generatePassword() {
  // Create a variable to store our generated password
  // var password = "";

  // Functions
  const isValidLength = function (number) {
    return number >= 8 && number <= 128;
  };

  const isValidOption = function (lowercase, uppercase, special, numbers) {
    return lowercase || uppercase || special || numbers;
  };

  const getRandomOption = function (array) {
    // check length of array
    const length = array.length;

    // choose random index from the array
    const randomOption = Math.floor(Math.random() * length);

    // return the index number
    return randomOption;
  };

  const getRandomCharacter = function (array) {
    // check length of array
    const length = array.length;

    // choose a random index from that array
    const randomCharacter = Math.floor(Math.random() * length);

    // access character of that index number
    const character = array[randomCharacter];

    // return the character
    return character;
  };

  // Arrays
  const lowerCaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const upperCaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const specialCharsArray = [
    " ",
    "!",
    "#",
    "$",
    "%",
    "!",
    "&",
    ")",
    "(",
    "*",
    "+",
    "!",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "{",
    "|",
    "}",
    "~",
    '"',
    "'",
    "`",
  ];

  const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const optionsArray = [];

  // Prompt user to insert password length

  const passwordLengthInput = prompt(
    "How many characters would you like the password to be?"
  );

  // Convert string to a number

  const passwordLength = parseInt(passwordLengthInput, 10);

  // Validate password length

  if (isValidLength(passwordLength)) {
    // Continue
  } else {
    alert("Please enter a number between 8 and 128.");
    return;
  }

  // Confirm if the user wants lowercase letters

  const lowerCaseLetters = confirm(
    "Do you want to include lowercase letters in the password?"
  );

  // Confirm if the user wants uppercase letters

  const upperCaseLetters = confirm(
    "Do you want to include uppercase letters in the password?"
  );

  // Confirm if the user wants special characters

  const specialCharacters = confirm(
    "Do you want to include special characters in the password?"
  );

  // Confirm if the user wants numbers

  const numbers = confirm("Do you want to include numbers in the password?");

  // Validate that at least one of the above options have been selected

  if (
    isValidOption(
      lowerCaseLetters,
      upperCaseLetters,
      specialCharacters,
      numbers
    )
  ) {
    // Continue
  } else {
    alert("Please choose at least one option.");
    return;
  }

  // Add selected options to an array
  if (lowerCaseLetters) {
    optionsArray.push(lowerCaseArray);
  }

  if (upperCaseLetters) {
    optionsArray.push(upperCaseArray);
  }

  if (specialCharacters) {
    optionsArray.push(specialCharsArray);
  }

  if (numbers) {
    optionsArray.push(numbersArray);
  }

  // Generate password

  for (i = 0; i < passwordLength; i++) {
    // Choose a random option from the options array
    const randomOption = getRandomOption(optionsArray);

    // Choose a random character from the chosen option
    const character = getRandomCharacter(optionsArray[randomOption]);
    console.log(character);
  }

  // Return our created password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
