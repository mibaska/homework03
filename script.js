var char0 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"];
var char1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var char2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var char3 = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLength = prompt("How long do you want your password?");
  var char;
  if(passwordLength < 8 || passwordLength>128) {
    alert("Password must be between 8 and 128 characters")
  } else {
    var passwordChar1 = confirm("Are capital letters ok?");
    var passwordChar2 = confirm("Are numbers ok?");
    var passwordChar3 = confirm("Are special characters ok?");
    if(passwordChar1 === true) {
      if(passwordChar2 === true) {
        if(passwordChar3 === true) {
          char = char0.concat(char1, char2, char3);
        } else {
          char = char0.concat(char1, char2);
        }
      } else {
        if(passwordChar3 === true) {
          char = char0.concat(char1, char3);
        } else {
          char = char0.concat(char1);
        }
      }
    } else {
      if(passwordChar2 === true) {
        if(passwordChar3 === true) {
          char = char0.concat(char2, char3);
        } else {
          char = char0.concat(char2);
        }
      } else {
        if(passwordChar3 === true) {
          char = char0.concat(char3);
        } else {
          char = char0;
        }
      }
    }
    var password = "";
    console.log(char);
    for(i = 0; i < passwordLength; i++) {
      password += char[Math.floor(Math.random() * char.length)];
      console.log(password);
    }
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordLast;
  var password = generatePassword();
  var passwordText = document.querySelector("#password").value = password;
  console.log(password);
  passwordText.value = passwordLast;
  return passwordLast;
  //copyBtn.removeAttribute("disabled");
  //copyBtn.focus();
}

function copyToClipboard() {
  // BONUS
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
