
// Random number function


var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}



// password generator function

function generatePassword () {


  // prompt user password length
  var passwordLength = window.prompt("How long do you want your password? Enter a number between 8 and 128");

  // convert passwordLength into an integer

  var parsedPass = parseInt(passwordLength);

  // check condition of integer value from prompt. Return to function if invalid

  if (parsedPass < 8 || parsedPass > 128 || !parsedPass ) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }


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


    var numbersPrompt = window.confirm("Do you want numbers in your password?");
    if (numbersPrompt) {
      // if true, add characters into the criteriaArray
      criteriaArray.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    }

    var specialCharPrompt = window.confirm("Do you want special characters in your password?");
    if (specialCharPrompt) {
      // if true, add characters into the criteriaArray
      criteriaArray.push("!", "#","$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~");
    }

    // create password string

    var actualPassword = [];

    // for loop, create string from each random character out of iteration 
    for ( let i=0; i < passwordLength; i++) {
      var randomChar = randomNumber(0,criteriaArray.length);
      actualPassword.push(criteriaArray[randomChar]);
    }

    // print generated password
    return(actualPassword.join(""));
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
