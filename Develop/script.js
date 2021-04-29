// If I refresh the page, how do I make everything restart instead of stay in the middle?
// How to I require that the passwordLength input be an integer?

// These are my random character generating functions.
getSpecialChar = function() {
  let alphabet = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
},
getLowerCaseChar = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
},  
getUpperCaseChar = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
},  
getNumericChar = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

let lowerCaseChar = getLowerCaseChar();
let upperCaseChar = getUpperCaseChar();
let numericChar = getNumericChar();
let specialChar = getSpecialChar();
let charSet = [lowerCaseChar, upperCaseChar, numericChar, specialChar];

// Testing to make sure random generators are working.
getLowerCaseChar();
console.log(lowerCaseChar);
getUpperCaseChar();
console.log(upperCaseChar);
getNumericChar();
console.log(numericChar);
getSpecialChar();
console.log(specialChar);

document.getElementById("generate").onclick = function() {
  passwordLength = prompt("Enter numeric length of password between 8 and 126.");
  // This will ensure the user selects the correct password length.
  while (passwordLength < 8) {
    alert("Number entered is not in between 8 and 128!");
    passwordLength = prompt("Enter numeric length of password between 8 and 126.");
  }
  lowerCaseChar = confirm("Do you want lowercase characters?");
  upperCaseChar = confirm("Do you want UPPERCASE characters?");
  numericChar = confirm("Do you want numeric characters?");
  specialChar = confirm("Do you want special characters?");
  // This will ensure the user selects at least one password criteria.
  while (!lowerCaseChar && !upperCaseChar && !numericChar && !specialChar) {
    alert("You must choose to use at least one option: lower case; upper case; number; and/or special character.")
    lowerCaseChar = confirm("Do you want lowercase characters?");
    upperCaseChar = confirm("Do you want UPPERCASE characters?");
    numericChar = confirm("Do you want numeric characters?");
    specialChar = confirm("Do you want special characters?");
  };
  // For internal logging use.
  console.log("The password length is " + passwordLength);
  console.log("They are using lower case letters: " + lowerCaseChar);
  console.log("They are using upper case letters: " + upperCaseChar);
  console.log("They are using numbers: " + numericChar);
  console.log("They are using special characters: " + specialChar);
  alert("Congratulations! You have sucessfuly selected your password criteria. Please wait while the password kittens assemble your password!")
  generatePassword();
  return;
};

/*
function createPassword() {

  generatePassword();
  return;
};
createPassword(); */

function generatePassword() {
  if (lowerCaseChar) {
    console.log(charSet[0]);
  };
  return;
};
password = generatePassword();


/*
// Assignment Code
let generateBtn = document.querySelector("#generate")
let specialCharList = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
let passwordLength
let lowerCaseChar
let upperCaseChar
let numericChar
let specialChar



// Will randomly generate the characters from each character set.
getLowerCaseChar = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

getUpperCaseChar = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

getNumericChar = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}



let specialCharacter = specialCharList[Math.floor(Math.random() * specialCharList.length)]

console.log(specialCharacter);

getSpecialChar = function() {
  return specialCharList[Math.floor(Math.random() * specialCharList.length)];
}

getSpecialChar()*/

/*
randomLowerCaseLetter = random.nextInt(26);

char value = 

Math.floor()

for (i = 0; i === passwordlength; */




/*
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function get.RandomLower() {

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/