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
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
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
        updateGameState(guess, wordToGuess, answerArray);
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
        drawElementOfHangman(triesRemaining);
        alert("Tries remaining: " + triesRemaining);
    }
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

function drawElementOfHangman(triesRemaining) {
    //upside-down "L"
    if (triesRemaining === 7) {
        ctx.beginPath();
        ctx.moveTo(47, 168);
        ctx.lineTo(47, 39);
        ctx.lineTo(135, 39);
        ctx.stroke();
    //head
    } else if (triesRemaining === 6) {
        ctx.beginPath();
        ctx.arc(135, 83, 16, 0, Math.PI * 2, false);
        ctx.stroke();
    //body
    } else if (triesRemaining === 5) {
        ctx.beginPath();
        ctx.moveTo(135, 99);
        ctx.lineTo(135, 141);
        ctx.stroke();
    //right arm
    } else if (triesRemaining === 4) {
        ctx.beginPath();
        ctx.moveTo(135, 112);
        ctx.lineTo(117, 130);
        ctx.stroke();
    //left arm
    } else if (triesRemaining === 3) {
        ctx.beginPath();
        ctx.moveTo(135, 112);
        ctx.lineTo(153, 130);
        ctx.stroke();
    //right leg
    } else if (triesRemaining === 2) {
        ctx.beginPath();
        ctx.moveTo(135, 141);
        ctx.lineTo(117, 158);
        ctx.stroke();
    //left leg
    } else if (triesRemaining === 1) {
        ctx.beginPath();
        ctx.moveTo(135, 141);
        ctx.lineTo(152, 158);
        ctx.stroke();
    //noose
    } else if (triesRemaining === 0) {
        ctx.beginPath();
        ctx.moveTo(130, 103);
        ctx.lineTo(140, 103);
        ctx.moveTo(135, 39);
        ctx.lineTo(135, 66);
        ctx.stroke();
    }
}