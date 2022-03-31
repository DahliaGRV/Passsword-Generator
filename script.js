function generatePassword() {

  var passwordLength = prompt("Please choose the character length for your password (between 8 and 128)") 

    var lowercase = confirm("Include lowercase letters?");

    var uppercase = confirm("Include uppercase letters?");

    var numbers = confirm("Include numbers?");

    var special = confirm("Include special characters?");

    // if (passwordLength)
  for (let i = 0; parseInt < passwordLength.length; i++) {
    // const element = passwordLength[i];
  }
    if (lowercase === true) {
      function generateLower() {
        const lowercaseAlphabet = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
        return lowercaseAlphabet[Math.floor(Math.random() * passwordLength.length)]
      };
      console.log(generateLower);

    } else if (uppercase === true) {
      function generateUpper() {
        const uppercaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        return uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)]
      };
    } else if (numbers === true) {
      function gnerateNumber() {
        const number = ["1","2","3","4","5","6","7","8","9","0"]
        return generateNumber [Math.floor(Math.random() * number.length )]
      };

    } else if (special === true) {
      function generateSpecial() {
        const specialCharacters = ["!","@","#","$","%","^","&","*","(",")"]
        return generateSpecial[Math.floor(Math.random() * specialCharacter.length)]
      } 
    } 
  
       // for(var i=0, i<=passwordLength.length);i++)
    //TODO: your code goes here
    const allCharacters = lowercaseAlphabet.concat(uppercaseAlphabet, number,specialCharacter)
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
