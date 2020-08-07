var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-"]
var userLength;
var userChoice = ["lowerCase", "uppercase", "numbers", "specialChars",];
var emptyArr = []; 


// Prompt user for character types then store answers
function user() {
userLength = prompt("How long would you like your password to be?"); 
  if (userLength < 8 || userLength > 128 ) {
    alert("Password must be between 8 and 128 characters");
  } else {
    var confirm1 = confirm("Do you want lowercase to be incorporated into your password?"); 
    if (confirm1 === true) {
      emptyArr = emptyArr.concat(lowerCase);
      console.log(emptyArr);
    } var confirm2 = confirm("Do you want uppercase incorporated into your passoword?"); 
    if (confirm2 === true) {
      emptyArr = emptyArr.concat(upperCase);
    } var confirm3 = confirm("Do you want to incorporate numbers into your password?");
    if (confirm3 === true) {
      emptyArr = emptyArr.concat(numbers);
    } var confirm4 = confirm("Do you want to incorporate special characters to your password?");
    if (confirm4 === true) {
      emptyArr = emptyArr.concat(specialChars);
    }
  }
}

function generatePassword() {
  var storePass = "";
  for ( i = 0; i < userLength; i++) {
   storePass = storePass + emptyArr[ Math.floor(Math.random() * emptyArr.length)];
  } return storePass;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  user()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
