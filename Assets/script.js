let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");
let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericChar = "0123456789";
let specialChar = "!@#$%^&*?";
let passwordArray = "";
let password = "";
let finalPassword = "";

// Will generate random characters from each criteria list
getRandomChar = function (arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

// Each variable will be a randomized character of that character set
let randomlower = getRandomChar(lowerCaseChar);
let randomupper = getRandomChar(upperCaseChar);
let randomnumeric = getRandomChar(numericChar);
let randomspecial = getRandomChar(specialChar);


function writePassword() {
    // Clears out the password variable, so the new password can be input.
    password = "";
    passwordText.value = password;

    passwordLength = prompt("Enter numeric length of password between 8 and 128.");

    // This will ensure the user selects the correct password length.
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        if (passwordLength === null) {
            alert("We are sad to see you go.");
            return;
        }
        alert("Number entered is not a numeric value or it is not in between 8 and 128!");
        passwordLength = prompt("Enter numeric length of password between 8 and 128.");
    }
    lowerCase = confirm("Do you want lowercase characters?");
    upperCase = confirm("Do you want UPPERCASE characters?");
    numbers = confirm("Do you want numeric characters?");
    specials = confirm("Do you want special characters?");

    // This will ensure the user selects at least one password criteria.
    while (!lowerCase && !upperCase && !numbers && !specials) {
        alert("You must choose to use at least one option: lower case; upper case; number; and/or special character.")
        lowerCase = confirm("Do you want lowercase characters?");
        upperCase = confirm("Do you want UPPERCASE characters?");
        numbers = confirm("Do you want numeric characters?");
        specials = confirm("Do you want special characters?");
    };

    alert("Congratulations! You have sucessfuly selected your password criteria. Please wait while the password kittens assemble your password!")

    // For internal logging use.
    console.log("The following is the selected password criteria:")
    console.log("The password length is " + passwordLength);
    console.log("They are using lower case letters: " + lowerCase);
    console.log("They are using upper case letters: " + upperCase);
    console.log("They are using numbers: " + numbers);
    console.log("They are using special characters: " + specials);

    generatePassword();
    return;
};


function generatePassword() {
    // These will make sure I have one of each selected criteria in my password
    let a = 0;
    if (lowerCase) {
        password += randomlower;
        a++;
        passwordArray += lowerCaseChar;
    };
    if (upperCase) {
        password += randomupper;
        a++;
        passwordArray += upperCaseChar;
    };
    if (numbers) {
        password += randomnumeric;
        a++;
        passwordArray += numericChar;
    };
    if (specials) {
        password += randomspecial;
        a++;
        passwordArray += specialChar;
        console.log("Number of characters currently added to password is " + a + ".");
    };

    // Creates our final array from which to randomly grab characters.
    function combineArray() {
        let finalArray = "";
        for (let b = 0; b < passwordArray.length; b++) {
            finalArray = finalArray.concat(passwordArray[b])
        };
        return finalArray;
    };
    combineArray();
    passwordArray = combineArray();
    console.log("This is the password array: " + passwordArray);

    // Creates the final password combination.
    function assemblePassword() {
        for (let c = a; c < passwordLength; c++) {
            password += getRandomChar(passwordArray)
        };
    };
    assemblePassword();
    console.log("The new password is " + password);
    password = password.toString();
    passwordText.value = password;
    return;
};

generateBtn.addEventListener("click", writePassword);