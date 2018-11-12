
//establlish array and variables
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var userChoice = [];
var randomCharacterVar;
var computerChoice;
var wins = 0;
var losses = 0; 
var guessesLeft = 9;
var guessesSoFarVar = [];


//call function for computer choice
randomCharacter();

// //user chooses one character a-z and we capture those choices
document.onkeyup = function(event) {
    var userChoice = String.fromCharCode(event.keyCode);

        // .toLowerCase();
        userChoice = userChoice.toLowerCase();

    

    // //compare choices and determine a win or loss or tie 
    if (userChoice === computerChoice) {
        alert("You got it!");
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
        randomCharacter();
        guessesLeft = 9;
        guessesSoFarVar = "Guess again";
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesSoFarVar = [];
    
    } else if (guessesLeft > 0){
        
        guessesSoFarVar.push(" " + userChoice);
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesLeft = guessesLeft - 1;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        

    }
    else {
        // increment losses print loses to screen 
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;

        //restart game
        randomCharacter();
        //reset guesses left to 9
        guessesLeft = 9;
        guessesSoFarVar = "Try again";
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesSoFarVar = [];
        
    }
  
    }
    



// //computer chooses one random character a-z - used math random formula to create computer choice (computer to make a choice)
function randomCharacter() {
    var randomNumber = Math.floor(Math.random() * 
        options.length);
    computerChoice = options[randomNumber];
    
}
