var correctLetter = getRandomLetter();
var numWins = 0;
var numLosses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


function getRandomLetter() {
    var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var randomLetter = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    console.log("Random Letter is " + randomLetter);
    return randomLetter;


}

function playGame() {
    var letterGuessed = event.key;
    if (letterGuessed == correctLetter) {
        console.log("Correct");
        numWins++;
        restartGame();

    }
    else {
        console.log("Wrong");
        guessesLeft--;
        guessesSoFar.push(letterGuessed);
        if (guessesLeft == 0) {
            numLosses++;
            restartGame();
        }

    }
    printResults();
}

function restartGame() {
    guessesLeft = 9;
    correctLetter = getRandomLetter();
    guessesSoFar = []
}
function printResults() {
    console.log("Wins: " + numWins);
    console.log("Losses: " + numLosses);
    console.log("Guesses Left: " + guessesLeft);
    console.log("Your Guesses so far: " + guessesSoFar);

    var winsTag= document.querySelector("#wins");
    winsTag.innerText = numWins;
    var lossesTag= document.querySelector("#losses");
    lossesTag.innerText = numLosses;
    var guessesTag= document.querySelector("#guesses");
    guessesTag.innerText = guessesLeft;
    var guessesSoFarTag= document.querySelector("#guesses-so-far");
    guessesSoFarTag.innerText = guessesSoFar;
}
document.onkeypress = playGame;


