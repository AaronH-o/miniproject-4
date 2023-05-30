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


function generatePassword() {

    var passwordLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128.");

    while(passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Number is not between 8 and 128. Please try again.");
    }
    
    var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
    var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var numbers = ["0123456789"];
    var specialCharacters  = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

    do {
      var characterTypes = [];
      var possibleCharacters = 0;
      if(confirm("Would you like to include lowercase letters?")) {
        characterTypes += lowercase;
        possibleCharacters += 26;
        console.log("lowercase " + characterTypes);
      }
      if(confirm("Would you like to include uppercase letters?")) {
        characterTypes += uppercase;
        possibleCharacters += 26;
        console.log("uppercase " + characterTypes);
      }
      if(confirm("Would you like to include numbers?")) {
        characterTypes += numbers;
        possibleCharacters += 10;
        console.log("numbers " + characterTypes);
      }
      if(confirm("Would you like to include special characters?")) {
        characterTypes += specialCharacters;
        possibleCharacters += 32;
        console.log("special " + characterTypes);
      }
      // Check if at least one character type is selected
      if (characterTypes.length === 0) {
        alert("Please select at least one character type.");
      }
    } while(characterTypes.length === 0);
  
    // Create password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * possibleCharacters);
      password += characterTypes[random];
      console.log(characterTypes.length);
      console.log(" charactertype[" + random + "] = " + characterTypes[random] + "\n i : " + i + " : " + password);
    }
  
    // Return password
    return password;
}