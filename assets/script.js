// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button has been clicked");

//create widow prompts to generate password.
// add criteria for user to choose password:
//    8-128 ch, confirm numeric, special, uppercase, and lowercase letters
//    validate input.
// generate password with chosen criteria

var characters = prompt("How many characters would you like the password to be?", "password must be between 8 and 128 characters");
if (characters >= 8 && characters <= 128) {
  var lower = prompt("Would you like lowercase characters in your password?");
}
// else {
//   return "password must be between 8 and 128 characters";

// }

// var upper = prompt("Would you like uppercase characters in your password?");
// var num = prompt("Would you like numbers in your password?");
// var special = prompt("Would you like special characters in your password?");
  
}

  // return "generated password here";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
