// If I refresh the page, how do I make everything restart instead of stay in the middle?
// How do I require that the passwordLength input be an integer?

// These are my random character generating functions.
let generateBtn = document.querySelector("#generate");
let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericChar = "0123456789";
let specialChar = "!@#$%^&*?";
let passwordArray = [];
let password = [];
let finalArray = "";

// Will generate random characters from each criteria list
getRandomChar = function(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

let randomlower = getRandomChar(lowerCaseChar);
let randomupper = getRandomChar(upperCaseChar);
let randomnumeric = getRandomChar(numericChar);
let randomspecial = getRandomChar(specialChar);
// Testing to make sure random generators are working.
console.log(randomlower);
console.log(randomupper);
console.log(randomnumeric);
console.log(randomspecial);

//make sure to fix the Nan
function writePassword() {
  passwordLength = prompt("Enter numeric length of password between 8 and 126.");
  // This will ensure the user selects the correct password length.
  while (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    alert("Number entered is not in between 8 and 128!");
    passwordLength = prompt("Enter numeric length of password between 8 and 126.");
  }
  lowerCase = confirm("Do you want lowercase characters?");
  upperCase = confirm("Do you want UPPERCASE characters?");
  numbers = confirm("Do you want numeric characters?");
  specials = confirm("Do you want special characters?");
  // This will ensure the user selects at least one password criteria.
  while (!lowerCaseChar && !upperCaseChar && !numericChar && !specialChar) {
    alert("You must choose to use at least one option: lower case; upper case; number; and/or special character.")
    lowerCase = confirm("Do you want lowercase characters?");
    upperCase = confirm("Do you want UPPERCASE characters?");
    numbers = confirm("Do you want numeric characters?");
    specials = confirm("Do you want special characters?");
  };
  // For internal logging use.
  console.log("The password length is " + passwordLength);
  console.log("They are using lower case letters: " + lowerCase);
  console.log("They are using upper case letters: " + upperCase);
  console.log("They are using numbers: " + numbers);
  console.log("They are using special characters: " + specials);
  alert("Congratulations! You have sucessfuly selected your password criteria. Please wait while the password kittens assemble your password!")
  generatePassword(); 
  return;
};


function generatePassword() {
  // These will make sure I have one of each selected criteria in my password
  if (lowerCase) {
    password.push(randomlower);
    passwordArray.push(lowerCaseChar);
    console.log("Password is " + password);
  };
  if (upperCase) {
    password.push(randomupper);
    passwordArray.push(upperCaseChar);
    console.log("Password is " + password);
  };
  if (numbers) {
    password.push(randomnumeric);
    passwordArray.push(numericChar);
    console.log("Password is " + password);
  };
  if (specials) {
    password.push(randomspecial);
    passwordArray.push(specialChar);
    console.log("Password is " + password);
  };
  function combineArray() {
    for (let i = 0; i < passwordArray.length; i++) {
      finalArray = finalArray.concat(passwordArray[i])
    };
    return finalArray;
  };
  combineArray();
  finalArray = combineArray();
  console.log(passwordArray);
  console.log(finalArray);
  return;
};

generateBtn.addEventListener("click", writePassword);


// when they choose their criteria have it also add one of that character into the final password, so you have at least one of each. Use the function random character generator. And also create arrays of the items and concatanate that array to the final array. 

/*

function get.RandomLower() {

}

randomLowerCaseLetter = random.nextInt(26);

char value = 

Math.floor()

for (i = 0; i === passwordlength; */

    function assemblePasswordElements() {
        for (let i = c; i < passwordLength.length i++) {
          password.push(getRandomChar(finalArray))
        };
        return;
      };