// Array of special characters to be included in password

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

var userPrompt = 0;
var userInputLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  //use confirm function to create prompts with limits/yes/cancel options so that users cannot break code
  userInputCap = confirm(
    "Do you want to inlcude capital letters in your password?"
  );
  userInputLow = confirm(
    "Do you want to include lower case letters in your password?"
  );
  userInputNum = confirm("Do you want to include numbers in your password?");
  userInputSplChr = confirm(
    "Do you want to include Special Characters in your pssword?"
  );
  var userPrompt = prompt("Please enter a number between 8 and 128");
  {
    if (userPrompt < 8 || userPrompt > 128)
      alert("Number must be between 8 and 128");

    // userPrompt = prompt("Please enter a number between 8 and 128");
  }
  console.log(userPrompt);
  console.log(userInputCap);
  console.log(userInputLow);
  console.log(userInputNum);
  console.log(userInputSplChr);
  return;
}

getPasswordOptions(userInputLength);

// Function for getting a random element from an array
var passwordCharacters = [];
var random = 0;
var password = "";

function getRandom(arr) {
  if (userInputCap === true) {
    passwordCharacterss = passwordCharacters.concat(upperCasedCharacters);
  }

  if (userInputLow === true) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
  }

  if (userInputNum === true) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }

  if (userInputSplChr === true) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
  for (let i = 0; i < userPrompt.length; i++) {
    random = Math.floor(Math.random() * passwordCharacters.length);
  }

  console.log(passwordCharacters[random]);
  console.log(passwordCharacters);
  return;
}
getRandom(passwordCharacters);
// Function to generate password with user input

// var random = 0;
// var password = [];

function generatePassword() {
  // for (let i = 0; i < userPrompt.length; i++) {
  //   random = Math.floor(Math.random() * userPrompt.length);
  // }
  // console.log(passwordCharacters[random]);
  // return;
}

getRandom(passwordCharacters[random]);
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
