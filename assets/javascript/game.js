var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.onkeyup = function (event) {
    var userGuess = event.key;

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 10;
            alert("Congratulations, You win!");
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
        else {
            guessesLeft--;
        }
        if (guessesLeft === 0) {
            alert("I'm sorry! You lose!");
            losses++;
            guessesLeft = 10;
        }
        else { }
    


    var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>";
        


    document.querySelector("#guess").innerHTML = html;
}
