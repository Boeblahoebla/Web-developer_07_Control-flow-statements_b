const numberToGuess = 5;
var guessedRight = false;
var triesLeft = 3;

// Continue the guessing game 3 times or until the right number has been guessed
for (var i = 1; i <= 3; i++) {
    var guessedNumber = prompt("Guess a number I have in mind from 1 to 5");

    // If the number is guessed right, update its boolean reflecting that and issue a fitting alert message
    if (guessedNumber == numberToGuess) {
        alert("Congratulations! you have guessed right");
        guessedRight = true;
        // If the number is not guessed right, decrement the tries left & issue a fitting alert message
    } else {
        triesLeft--;
        if (triesLeft > 1) {
            alert("Guess again. You still have " + triesLeft + " tries left");
        } else if (triesLeft == 1) {
            alert("Guess again but carefully. It is your last try");
        } else {
            alert("Too bad. You have not guessed the right number")
        }
    }
}

// Print out the guessed number in the console
console.log("the number you have guessed is " + guessedNumber)