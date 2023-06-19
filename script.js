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
