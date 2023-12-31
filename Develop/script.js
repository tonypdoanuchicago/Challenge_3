// Assignment code here


// Get references to the #generate element
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
  let minLength = prompt('What is the password minimum length?');
  let maxLength = prompt('What is the password maximum length?');

  if (isNaN(minLength) || isNaN(maxLength)) {
    alert("Either min length or max length is not a number!");
    return;
  }

  if (parseInt(minLength,10) > parseInt(maxLength,10)) {
    alert("Your min length is greater than your max length!");
    return;
  }

  let allowSpecialCharacters = confirm("Do you want to allow special characters?");

  let allowUpperCase = confirm("Do you want to allow upper case?");

  let allowNumbers = confirm("Do you want to allow numbers?");

  var upperCaseToggle = true
  var numberToogle = true
  var specialCharactersToogle = true

  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const upper_alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lower_alpha = 'abcdefghijklmnopqrstuvwxyz'

  var passwordText = ""

  for (let i = 0; i < maxLength; ++i) {
    if (i % 3 == 0) {
      if (allowNumbers && numberToogle) {
        passwordText += Math.floor(Math.random() * 9)
      } else if (allowUpperCase) {
        passwordText += alphabet[Math.floor(Math.random() * alphabet.length)]; 
      } else {
        passwordText += lower_alpha[Math.floor(Math.random() * lower_alpha.length)]; 
      }
      numberToogle = !numberToogle
    } else if (i % 3 == 1) {
      if (allowUpperCase && upperCaseToggle) {
        passwordText += upper_alpha[Math.floor(Math.random() * upper_alpha.length)]; 
      } else {
        passwordText += lower_alpha[Math.floor(Math.random() * lower_alpha.length)];
      }
      upperCaseToggle = !upperCaseToggle
    } else if (i % 3 == 2) {
      if (allowSpecialCharacters && specialCharactersToogle) {
        passwordText += randomSpecialChar();
      } else if (allowUpperCase) {
        passwordText += alphabet[Math.floor(Math.random() * alphabet.length)]; 
      } else {
        passwordText += lower_alpha[Math.floor(Math.random() * lower_alpha.length)]; 
      }
      specialCharactersToogle = !specialCharactersToogle
    }
  }

  return passwordText;
}

function randomSpecialChar() {
  var s = "!\"§$%&/()=?\u{20ac}";

  return s.substr(Math.floor(s.length*Math.random()), 1);
} 