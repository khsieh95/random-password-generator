// TODO: Create Prompt
// How many characters would you like (8-128)? 
// TODO: Create Confirms
// Would you like numbers? Special Characters? Captial letters?
// TODO: Add if/else statements regarding for prompt 
// restrict them from too few and too many characters 
// add alert
// TODO:Add if/else statements for confirms
// TODO:Create variables
// TODO:Create function and character sets depending on prompt/confirm answers
// TODO:Followed by for loop and randomizing the content within the character sets
// TODO:Return the value to function


var passLength = prompt ("How long would you like your password?")




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



