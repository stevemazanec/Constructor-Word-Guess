
var letter = function (string) {
    this.string = string;
    this.guessed = false;
    this.placeholder = function () {
        if (this.guessed === false) {
            return "_";
        }
        else {
            return this.string;
        }
    }
    this.userGuess = function (guess) {
        if (guess === this.string) {
            this.guessed = true;
        }
        return guess === this.string;
    }
}

module.exports = letter;
