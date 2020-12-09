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


// Assignment Code

var generateBtn = document.querySelector("#generate"); {
function generatePassword () {

  var userPass = [""]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var specialCharacters = ["!","@","#","$","%","^","&"]
  
  var passLength =0
  while (passLength < 8 || passLength > 128) {
    passLength = prompt ("How long would you like your password? (Between 8-128)");
  }
  
    
  var passUpper = confirm ("Would you like upper case letters?");
  if (passUpper) {
    (userPass = userPass + upperCase)
  }
  
  var passLower = confirm ("Would you like lower case letters?");
  if (passLower) {
    (userPass = userPass + lowerCase)
  }

  var passNum = confirm ("Would you like numbers?");
  if (passNum) {
    (userpass = userPass + numbers)
  }

  var passChar = confirm ("Would you like special characteres? (!@#$%)");
  if (passChar) {
    (userPass = userPass + specialCharacters)
  }
   
  for (var i = 0 ; i < passLength; i++) {
    var finalPass = finalPass + userPass[Math.floor (Math.random() * userPass.length)];
  }
}

// return finalPass;
}







  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



