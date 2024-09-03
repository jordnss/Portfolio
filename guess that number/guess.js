// Write a program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
//The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched"


const prompt = require('prompt-sync')();


randomInt= (Math.floor(Math.random() * 10));

//created a function that greets user and prompts to guess a number 1-10

function greetings(){
    userInput = prompt("Guess a number 1-10: ")

if (randomInt == userInput){ // if else statement that checks the users guess to the random number generated. if criteria is met there will be a response and vice versa
    console.log("Great Guess")
} else{
    console.log("SORRY, TRY AGAIN! " + " The number was: " + randomInt );
}

}


greetings(); // call the function

var cont= prompt("Would you like to try again? Y or N? ") // give user the option to continue guessing or terminate program.




// if else statements for the option to continue or terminate


if (cont == "Y"){
    greetings(); 
} else if (cont = "N") {
    Error("Goodbye!")
}else{
    console.log("NaN")
}


// figure out how to get this all into a for loop. (for loop)...

