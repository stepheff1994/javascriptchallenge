// Assignment code here

// global variables

// confirm variables
var up = false;
var low = false;
var spec = false;
var num = false;

// string variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuv";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "1234567890";

// password variables
var pLength;
var userChoice = "";
var randomPass;

// Get references to the #generate element


// Write password to the #password i

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
    if(length >= 8 && length < 129) {
        var up = window.confirm("Do you want upper case letters in your password?");
    } else {
        window.alert("Please enter a number between 8 and 128")
    }
    //if user wants uppercase letters add them to their userChoice
    if(up) {
        up = true;
        userChoice = userChoice + upperCase;
    }

     

    

    //confirm if: upper case, 
    
    
    //lower case, 
    
    //special characters
    // validate on these and make sure they choose at least one type

    // I. take their answers and spit out a random password
    // a. think about if statements, arrays (or strings) to hold all characters, and a for loop, and math.random

    var password = "";
    return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    

}
//first user clicks on generate password button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
