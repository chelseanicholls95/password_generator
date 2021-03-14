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
  var password = "";

  // Functions
  const isValidLength = function (number) {
    return number >= 8 && number <= 128;
  };

  const isValidOption = function (lowercase, uppercase, special, numbers) {
    return lowercase || uppercase || special || numbers;
  };

  // Prompt user to insert password length

  const passwordLengthInput = prompt(
    "How many characters would you like the password to be?"
  );

  // Validate password length

  if (isValidLength(passwordLengthInput)) {
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
  } else {
    alert("Please choose at least one option.");
  }

  // Generate password

  // Return our created password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
