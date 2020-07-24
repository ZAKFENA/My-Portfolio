// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays from which the random characters will be picked.
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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

// Functions for getting random characters from the arrays
function getRandomLower() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUpper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomCharacters() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

// Function to combine and join the randomly pickd characters.
function generatePassword() {
  var lengthPrompt = prompt("How long do you want your password to be?");
  var passwordPool = [];

  // Prompts and confirms to validate
  if (lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt)) {
    alert("Please enter number between 8 and 128");
    return "Please click Generate Button below";
  } else
    var specialCharConfirm = confirm(
      "Do you want to have SPECIAL CHARACTER in your password?"
    );
  var lowerCaseConfirm = confirm(
    "Do you want to have LOWER CASE in your password?"
  );
  var upperCaseConfirm = confirm(
    "Do you want to have UPPER CASE in your password?"
  );
  var numberConfirm = confirm("Do you want to have NUMBER in your password?");

  // Loop to add the randomly picked characters from the arrays of characters to one passwordPool Array until
  for (var i = 0; i < lengthPrompt; i++) {
    if (specialCharConfirm) {
      passwordPool.push(getRandomCharacters());
    }

    if (lowerCaseConfirm) {
      passwordPool.push(getRandomLower());
    }

    if (upperCaseConfirm) {
      passwordPool.push(getRandomUpper());
    }

    if (numberConfirm) {
      passwordPool.push(getRandomNumbers());
    }
  }

  return passwordPool.slice(0, lengthPrompt).join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
