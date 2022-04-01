
// TODO: ASSIGNING VARIABLES
// snag the button
// length
// lowercase array
// uppercase array
// numbers array
// spec chars arry
// piggybank array
// text output field
// output password

// TODO: PROMPTS/ STORING RESPONSES
// listen to the button
// how long is the password?
// lowercase? STORE IN EMPTY PIGGYBANK ARRAY (concat)
// uppercase? STORE IN EMPTY PIGGYBANK ARRAY (concat)
// numbers? STORE IN EMPTY PIGGYBANK ARRAY (concat)
// spec chars? STORE IN EMPTY PIGGYBANK ARRAY (concat)
// fallback (if no to all char types, restart function)


// TODO: GENERATING / RETURNS PASSWORD
// for loop to grab random characters from piggybank array- using password length (outputs array)
// join that output as a string
// print generated password onto page

const lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var allCharacters = [];

var finalPassword = [];

var passwordLength; 

function generatePassword() {
  getPasswordLength();

  var lowercase = confirm("Include lowercase letters?");

  var uppercase = confirm("Include uppercase letters?");

  var numbers = confirm("Include numbers?");

  var special = confirm("Include special characters?");
  console.log(passwordLength);
  if (!lowercase&&!uppercase&&!numbers&&!special) {
    console.log(passwordLength);
    alert("No password could be generated, restart");
    generatePassword()
  } else {
  if (lowercase === true) {
   allCharacters= allCharacters.concat(lowercaseAlphabet)
   console.log(allCharacters);
  };
  if (uppercase === true) {
    console.log(allCharacters);
    allCharacters = allCharacters.concat(uppercaseAlphabet)
  };
  if (numbers === true) {
    console.log(allCharacters);
    allCharacters = allCharacters.concat(number)
  };
  if (special === true) {
    console.log(allCharacters);
    allCharacters = allCharacters.concat(specialCharacters)
  };}

  for (i = 0; i < passwordLength; i++) {
    var lengthPassword = allCharacters[Math.floor(Math.random() * passwordLength)];
    finalPassword.push(lengthPassword);
  }; 
  var passwordString = finalPassword.join("");
  allCharacters = [];
  finalPassword = [];
  console.log(finalPassword);
  return passwordString
 
}

function getPasswordLength () {
  passwordLength = prompt("Please choose the character length for your password (between 8 and 128)")
  if(passwordLength === null) {
    alert("Please enter a numeric character between 8 and 128 to continue");
    generatePassword();
  } else if (passwordLength > 128) {
    alert("Invalid amount")
    generatePassword() 
  } else if (passwordLength < 8) {
    alert("Invalid amount")
  generatePassword()
  };
   
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
