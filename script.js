
function generatePassword() {

    var passwordLength = prompt("Please choose the character length for your password (between 8 and 128)") 

    var lowercase = confirm("Include lowercase letters?");

    var uppercase = confirm("Include uppercase letters?");

    var numbers = confirm("Include numbers?");

    var special = confirm("Include special characters?");

    if (passwordLength)
    
    else if (lowercase === true) {
      function generateLower() {
        const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
        return lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)]
      };
      console.log(generateLower);
    } else if (uppercase === true) {
      function generateUpper() {
        const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)]
      };
      console.log(generateUpper);
    } else if (numbers === true) {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * max - min)
      };
      console.log(getRandomInt)
    } else if (special === true) {
      function generateSpecial() {
        const specialCharacters = "!@#$%^&*()"
        return generateSpecial[Math.floor(Math.random() * specialCharacter.length)]
      }
    }
    //TODO: your code goes here
    return "password"
  }


  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
