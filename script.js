

// Assignment Code

var generateBtn = document.querySelector("#generate"); {
// Created initial function of the button
function generatePassword () {

  var userPass = []
  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var passNumbers = ["0123456789"];
  var specialCharacters = ["!@#$%^&*-()"];
  var passwordOptions = []
  
  var passLength =0
  while (passLength < 8 || passLength > 128) {
    passLength = prompt ("How long would you like your password? (Between 8-128)");
    if (passLength < 8 || passLength > 128){
      alert ("Password must be between 8 and 128 characters")
    }
  }
  
    
  var passUpper = confirm ("Would you like upper case letters?");
  if (passUpper) {
    (passwordOptions += upperCase)
  }
  
  var passLower = confirm ("Would you like lower case letters?");
  if (passLower) {
    (passwordOptions += lowerCase)
  }


  var numbers = confirm ("Would you like numbers?");
  if (numbers) {
    (passwordOptions += passNumbers)
  }
  
  var passChar = confirm ("Would you like special characteres? (!@#$%)");
  if (passChar) {
    (passwordOptions += specialCharacters)
    console.log (userPass)
  }
  function getRandom(array) {
    var randomIndex = Math.floor (Math.random()* array.length);
    var randomElement = array[randomIndex];
    return randomElement;
  }
  for (var i=0; i<passLength; i++){
    var randomChar = getRandom(passwordOptions); 
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



