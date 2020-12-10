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

  var userPass = []
  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var passNumbers = ["0123456789"];
  var specialCharacters = ["!@#$%^&*-()"];
  var passWordOptions = []
  
  var passLength =0
  while (passLength < 8 || passLength > 128) {
    passLength = prompt ("How long would you like your password? (Between 8-128)");
    if (passLength < 8 || passLength > 128){
      alert ("Password must be between 8 and 128 characters")
    }
  }
  
    
  var passUpper = confirm ("Would you like upper case letters?");
  if (passUpper) {
    (passWordOptions += upperCase)
  }
  
  var passLower = confirm ("Would you like lower case letters?");
  if (passLower) {
    (passWordOptions += lowerCase)
  }


  var numbers = confirm ("Would you like numbers?");
  if (numbers) {
    (passWordOptions += passNumbers)
  }
  
  var passChar = confirm ("Would you like special characteres? (!@#$%)");
  if (passChar) {
    (passWordOptions += specialCharacters)
    console.log (userPass)
  }
  function getRandom(array) {
    var randomIndex = Math.floor (Math.random()* array.length);
    var randomElement = array[randomIndex];
    return randomElement;
  }
  for (var i=0; i<passLength; i++){
    var randomChar = getRandom(passWordOptions); 
    userPass.push(randomChar);
  }
  console.log(userPass.join(""))
  return userPass.join("");
  
}


}







  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



