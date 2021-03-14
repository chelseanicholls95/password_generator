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

  // Prompt user to insert password length between 8 and 128 characters

  // Validate length of user input

  // Confirm if the user wants lowercase letters

  // Confirm if the user wants uppercase letters

  // Confirm if the user wants special characters

  // Confirm if the user wants numbers

  // Validate that at least one of the above options have been selected

  // Generate password

  // Return our created password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
