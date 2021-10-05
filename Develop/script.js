// Assignment code here

// create criteria functions that include prompts with validation and stores the value in a variable

// create array with each criteria function assigned its own index

// run for loop that runs each criteria function and prints the value into a string





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
