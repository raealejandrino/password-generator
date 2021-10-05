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




// SAVE BOOLEAN VALUEs OF CRITERIA AND IMPLEMENT INTO CONDITION STATEMENTS IN FOR ITERATOR LOOP 


// append random charset type selector array from TRUE criteria boolean values?

// random number 


// CONFIRMS WILL ADD THE CHARACTERS INTO AN ARRAY, AFTER ALL THE PROMPTS, RANDOMIZE THAT ARRAY AND OUTPUT HOWEVER LONG THE DESIRED LENGTH IS



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


function randomLowercase () {

  
  var criteriaArray = [];
  var randomLower = randomNumber(0,26);
  return lowercase[randomLower];

}



var testArray = [randomLowercase()];



// password generator function

function generatePassword () {


  // prompt user password length
  var passwordLength = window.prompt("How long do you want your password? Enter a number between 8 and 128");


  // create full array

  var criteriaArray = [];

    var lowercasePrompt = window.confirm("Do you want lowercases in your password?");
    if (lowercasePrompt) {
      // if true, add characters into the criteriaArray
      criteriaArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }

    var uppercasePrompt = window.confirm("Do you want uppercases in your password?");
    if (uppercasePrompt) {
      // if true, add characters into the criteriaArray
      criteriaArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }

    // create password string

    var actualPassword = [];

    // for loop, create string from each random character out of iteration 
    for ( let i=0; i < passwordLength; i++) {
      var randomChar = randomNumber(0,criteriaArray.length);
      actualPassword.push(randomChar);



    }

    actualPassword.join("");
    console.log(actualPassword);
}


  // // find random lowercase and print it

    // var randomLower = randomNumber(0,26);
    // console.log(lowercase[randomLower]);




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
