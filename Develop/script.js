// Assignment code here


// Implement window prompt for length of password

// Store that value in a variable that will be used in the condition expression of iterator 

// must create randomizer for each criteria?

// create array for all lowercase letters, all uppercase letters, all numbers, all special characters

// make use of random number function



////////////////////////////////////


// create criteria functions that include prompts with validation and stores the value in a variable

// create array with each criteria function assigned its own index

// run for loop that runs each criteria function and prints the value into a string




// random number

var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}





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
