// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  '"',
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

function getRandomLower(lowerCase) {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUpper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomnumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomCharacters() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

function generatePassword() {
  return;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
