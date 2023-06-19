//Created Charcater Arrays to create password from
var specialChar =["`","~","!","@","#","$","%","^","&","*","(",")","_","-","[","]","{","}","/","<",">"];
var numChar = ["0","1","2", "3","4","5","6","7","8","9"];
var lowercasedChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n", "o","p", "q","r","s","t","u","v","w","x","y","z"];
var UppercasedChar = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Function to select a random element from the input array

function randomSelector(inputArray){
  if (inputArray && inputArray.length){
    var randomIndex = randNumbGenerator(inputArray.length);
    return inputArray[randomIndex];
  } else {
    return null
  }
}

//Function to generate a random number between 0 and max, exluding max

function randNumbGenerator (max){
  return Math.floor(Math.random() * (max));
}

//function to shuffle characters inside a string array
//This is used to shuffle the available characters for the password to randomize the order

function shuffleString(input){
  var stringArr = input.split("");
  
  for (var i=stringArr.length-1;i>=0;i--){
    var randomIndex = randNumbGenerator(stringArr.length);
    var temp = stringArr[i];
    stringArr[i] = stringArr[randomIndex];
    stringArr[randomIndex] = temp;
  }
  
  return stringArr.join("");
}

//function to get password options using prompts
function getpasswordOptions(){

  //prompt to ask how many characters the password should be
  //parseInt used to convert input into number 
  var passlength = parseInt(prompt ("How many characters would you like your password to contain?"), 10);
  
  //check if the input is a number
  if (Number.isNaN(passlength)){
    alert("Password length must be a number");
    return null;
  }
  console.log(`result: ${passlength}`);
  
  //checks for number to be with 8 to 128
  if (passlength < 8){
    alert("Password must be atleast 8 characters")
    return null;
  }

  if (passlength > 129){
    alert("Password must be less than 129 characters")
    return null;
  }
  
//takes boolean value based on user input
var hasSpecialChar = confirm(
  "Click OK if you would like to include special characters"
);

var hasNumericChar = confirm(
  "Click OK if you would like to include numeric characters"
)

var haslowercaseChar = confirm(
  "Click OK if you would like to include lowercase characters"
)

var hasUppercaseChar = confirm(
  "Click OK if you would like to include uppercase characters"
)

//returns an object with password options 
return {
  passlength,
  hasSpecialChar,
  hasNumericChar,
  haslowercaseChar,
  hasUppercaseChar,
}
}

//added the function to call prompts under the generatePassword function in the Assignment Code
function generatePassword(){
  var passwordOptions = getpasswordOptions();
  return buildPassword(passwordOptions);
}

//Function to build password based on user selections on the prompts
function buildPassword(passwordOptions){

  //returns error message if password option inputs are incorrect
  if (!passwordOptions){
    return "Invalid Password Option!"
  }

  //stores list of all vaialble characters
  var allAvailChar = [];
  //stores all guaranteed characters based on selected options
  //This refers to one of any selected charcater type selected by the user 
  var guaranteedChars = [];

  //final password characters
  var result = [];

  //Adds selected character type array to the list of available characters for the password creation
  //Adds one random element of the selected charcater type to the guaranteed characters array
  if (passwordOptions.hasSpecialChar){
    allAvailChar = allAvailChar.concat(specialChar);
    guaranteedChars.push(randomSelector(specialChar));
  }

  if (passwordOptions.hasNumericChar){
    allAvailChar = allAvailChar.concat(numChar);
    guaranteedChars.push(randomSelector(numChar));
  }

  if (passwordOptions.haslowercaseChar){
    allAvailChar = allAvailChar.concat(lowercasedChar);
    guaranteedChars.push(randomSelector(lowercasedChar));
  }

  if (passwordOptions.hasUppercaseChar){
    allAvailChar = allAvailChar.concat(UppercasedChar);
    guaranteedChars.push(randomSelector(UppercasedChar));
  }

  console.log(allAvailChar);
  console.log(guaranteedChars);

  // Adds the array of the guaranteed characters to the password
  result = result.concat(guaranteedChars);

//randomly selects password characters from available characters and adds to the guaranteed characters for the password
for (i=0; i <passwordOptions.passlength - guaranteedChars.length; i++) {
result.push(randomSelector(allAvailChar))
}

//shuffles the password string and returns the final password string
return shuffleString(result.join(""));
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);