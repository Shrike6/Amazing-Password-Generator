
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button has been clicked");
  // Variables being defined
  var chars = ["a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var sym = ['!', '@', '#', '$','%', '^', '&', '*', '?', '.', '/', ',', '`', '-', '_', '+', '=']
  var passArray = []; // Password Array to be populated by criteria
  var randomPass = ''; // Password String that will be returned

  //Prompts
  var passLength = prompt("How many characters would you like the password to be?", "password must be between 8 and 128 characters");
  console.log(passLength)
  if (passLength < 8 || passLength > 128) {

    return "Password must be between 8 and 128 characters"

  }
  else if (isNaN(parseInt(passLength))) {

    return "Password must be between 8 and 128 characters"

  }

  var lower = confirm("Would you like uppercase characters in your password?");
  console.log(lower);

  var upper = confirm("Would you like uppercase characters in your password?");
  console.log(upper);

  var numChars = confirm("Would you like numbers in your password?");
  console.log(numChars);

  var special = confirm("Would you like special characters in your password?");
  console.log(special);

  
// Adds chosen criteria to password Array
  if (lower) {
    passArray = passArray.concat(chars);
    console.log(passArray);
  }

  if (upper) {
    passArray = passArray.concat(upperChars);
    console.log(passArray);
  }

  if (numChars) {
    passArray = passArray.concat(num);
    console.log(passArray);
  }

  if (special) {
    passArray = passArray.concat(sym);
    console.log(passArray);
  }

  //Password generator
  
  for (var i = 0; i < passLength; i++) {
    //generate randomPass a random string from passArray
    randomPass += passArray[Math.floor(Math.random() * passArray.length)];
  }
  
    
    return randomPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
