let wordsToGuess = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "java",
    "github",
    "monitor",
    "door",
    "control",
    "camera",
    "chair",
    "automobile",
    "picture",
    "temperature",
    "window",
    "floor"
];
let wordToGuess = pickWord();
let answerArray = setupAnswerArray(wordToGuess);
let remainingLetters = wordToGuess.length;
let triesRemaining = 8;
let lettersEntered = [];

while (remainingLetters > 0 && triesRemaining > 0) {
    showPlayerProgress(answerArray, triesRemaining, lettersEntered);

    let guess = getGuess();
    if (guess === null) {
        break;
    } else {
        let correctGuesses = updateGameState(guess, wordToGuess, answerArray);
    }
}
showAnswerAndCongratulatePlayer(answerArray);





function pickWord() {
    return wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
}

function setupAnswerArray(wordToGuess) {
    let answerArray = [];
    for (let i = 0; i < wordToGuess.length; i++) {
        answerArray.push("_");
    }
    return answerArray;
}

function showPlayerProgress(answerArray, triesRemaining, lettersEntered) {
    alert(answerArray.join(" ") + "\nTries remaining: " + triesRemaining + "\nLetters used: " + lettersEntered.join(", "));
}

function getGuess() {
    let ch;
    while (true){
        ch = prompt("Guess a letter, or click cancel to stop playing.");
        if (ch === null) return null;
        if (ch.length === 1) {
            if (lettersEntered.indexOf(ch) == -1) break;
            alert("You have already entered this letter.")
        } else {
            alert("Please enter a single letter.");
        }
    }
    ch = ch.toLowerCase();
    lettersEntered.push(ch);
    return ch;
}

function updateGameState(guess, wordToGuess, answerArray) {
    let correctGuesses = 0;
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === guess && answerArray[i] === "_") {
                answerArray[i] = guess;
                remainingLetters--;
                correctGuesses++;
            }
        }
        if (!correctGuesses) {
            triesRemaining--;
            alert("Tries remaining: " + triesRemaining);
        }
        return correctGuesses;
}

function showAnswerAndCongratulatePlayer(answerArray) {
    if (triesRemaining === 0){
        alert ("You lose. Correct answer was " + wordToGuess);
    } else if (remainingLetters === 0){
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + wordToGuess);
    } else {
        alert("The answer was " + wordToGuess);
    }
}