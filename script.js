// Assignment code here

// global variables



// string variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuv";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "1234567890";
var reg = /^\d+$/;





function generatePassword() {
    //set variables to starter values at the begining of generatePassword()
    var up = false;
    var low = false;
    var spec = false;
    var num = false; 
    var userChoice = "";
    
    //ask for length of password
    var length = window.prompt("How many characters long do you want your password to be? (between 8 and 128)");

    //check for appropiate length, if true, ask if user wants uppercase letters in password
    while(length < 8 || length >= 129 || !reg.test(length)) {
    


   
        window.alert("Please enter a number between 8 and 128")
        length = window.prompt("How many characters long do you want your password to be? (between 8 and 128)");
    }
    up = window.confirm("Do you want upper case letters in your password?");
    //if user wants uppercase letters add them to their userChoice
    if(up) {
        
        userChoice = userChoice + upperCase;
    }

    low = window.confirm("Do you want lower case letters in your password?");

    if(low) {
    
        userChoice = userChoice + lowerCase;

    }

    spec = window.confirm("Do you want special characters in your password?")

    if(spec) {
        userChoice = userChoice + specialChar
    }

    num = window.confirm("Do you want numbers in your password?")

    if(num) {
        userChoice = userChoice + numbers
    }

     

    

    //confirm if: upper case, 
    
    
    //lower case, 
    
    //special characters
    // validate on these and make sure they choose at least one type

    // I. take their answers and spit out a random password
    // a. think about if statements, arrays (or strings) to hold all characters, and a for loop, and math.random

    var password = "";
    for (var i = 0; i < length; i++) {
        password += userChoice[Math.floor(Math.random() * userChoice.length)];
    } 
    var verfied = {
        up: !up,
        low: !low,
        spec: !spec,
        num: !num,
    }
    
    for (let char of password) {
        if (upperCase.includes(char)) {
            verfied.up = true;
        }

        if (lowerCase.includes(char)) {
            verfied.low = true;
        }

        if (specialChar.includes(char)) {
            verfied.spec = true;
        }

        if (numbers.includes(char)) {
            verfied.num = true;
        }
    }

    for (let type in verfied) {
        if (verfied[type] === false) {
            return generatePassword();
        }
    }

    
    return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log(password)

    passwordText.value = password;
    

}
//first user clicks on generate password button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
