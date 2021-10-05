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


// Charset vars

// 26 in alphabet
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// 10 in numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 8 specials
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];



// password generator function

function generatePassword () {

    // find random lowercase and print it

    var randomLower = randomNumber(0,26);
    console.log(lowercase[randomLower]);


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
