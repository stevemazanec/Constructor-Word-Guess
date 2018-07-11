var word = require("./word");
var inquirer = require("inquirer");
var wordBank = ["pepperoni", "garlic", "mozzarella", "onions", "sauce", "bacon", "sausage"];
var newWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var answer = new word(newWord);
var guessesRemaining = 7;

var newGame = function () {
    newWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    answer = new word(newWord);
    answer.addLetter();
    answer.wordDisplay();
    playGame();
}
var playGame = function () {
    if (guessesRemaining > 0) {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter",
                name: "letter"
            }
        ])
            .then(function (response) {
                var correctGuess = answer.checkGuess(response.letter);
                if (correctGuess === true) {
                    console.log("Correct!")
                    answer.wordDisplay();
                    playGame();
                }
                else {
                    answer.wordDisplay();
                    guessesRemaining--;
                    console.log("\nIncorrect!\n\nGuesses remaining: " + guessesRemaining + "\n");
                    playGame();
                }
            })

    }
    else {
        inquirer.prompt([
            {
                type: "confirm",
                message: "Would you like to play again?",
                name: "again",
                default: true
            }
        ])
            .then(function (confirmation) {
                if (confirmation.again === true) {
                    guessesRemaining = 10;
                    newGame();
                }
                else {
                    console.log("Too bad. Game over");
                }
            })
    }
}
newGame();