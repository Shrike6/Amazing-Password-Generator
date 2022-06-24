// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button has been clicked");
  var chars = ["a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var num = "0123456789";
  // var sym = !@#$%^&*?.
//create widow prompts to generate password.
// add criteria for user to choose password:
//    8-128 ch, confirm numeric, special, uppercase, and lowercase letters
//    validate input.
// generate password with chosen criteria

var passLength = prompt("How many characters would you like the password to be?", "password must be between 8 and 128 characters");
console.log(passLength)
if (passLength >= 8 && passLength <= 128) {
  var upperCase = confirm("Would you like uppercase characters in your password?");
  console.log(upperCase);
    if (upperCase === true || upperCase === false) {
      var num = confirm("Would you like numbers in your password?");
      console.log(num);
    }
    if (num === true || num === false) {
      var symb = confirm("Would you like special characters in your password?");
      console.log(symb);
    }
}
else {
  return "password must be between 8 and 128 characters";
}



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
