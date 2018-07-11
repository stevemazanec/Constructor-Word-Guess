var letter = require("./letter");

var word = function (newWord) {
    this.newWord = newWord;
    var letters = [];
    this.addLetter = function () {
        var wordLetters = newWord.split("");
        for (k = 0; k < wordLetters.length; k++) {
            letters.push(new letter(wordLetters[k]));
        }
    }
    this.wordDisplay = function () {
        var displayWord = "\n";
        for (i = 0; i < letters.length; i++) {
            displayWord += " " + letters[i].placeholder();
        }
        console.log(displayWord);
    }
    this.checkGuess = function (input) {
        var isCorrect = false;
        for (j = 0; j < letters.length; j++) {
            if (isCorrect === false) {
                isCorrect = letters[j].userGuess(input);
            }
            else {
                letters[j].userGuess(input);
            }

        };
        return isCorrect;
    }
};

module.exports = word;