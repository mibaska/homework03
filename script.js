var char0 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"]
var char1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var char2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var char3 = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  this.passwordLength = prompt("How long do you want your password?");
  this.passwordChar1 = confirm("Are capital letters ok?");
  this.passwordChar2 = confirm("Are numbers ok?");
  this.passwordChar3 = confirm("Are special characters ok?");
  if(passwordChar1 === true) {
    if(passwordChar2 === true) {
      if(passwordChar3 === true) {
        this.char = char0 + char1 + char2 + char3;
      } else {
        this.char = char0 + char1 + char2;
      }
    } else {
      if(passwordChar3 === true) {
        var char = char0 + char1 + char3;
      } else {
        this.char = char0 + char1;
      }
    }
  } else {
    if(passwordChar2 === true) {
      if(passwordChar3 === true) {
        this.char = char0 + char2 + char3;
      } else {
        this.char = char0 + char2;
      }
    } else {
      if(passwordChar3 === true) {
        this.char = char0 + char3;
      } else {
        this.char = char0;
      }
    }
  }
  for(i = 0; i < generatePassword.passwordLength; i++) {
    var rndIdx = Math.floor(Math.random() * char.length);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
