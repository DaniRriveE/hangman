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
let wordToGuess = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
let answerArray = [];
for (let i = 0; i < wordToGuess.length; i++) {
    answerArray.push("_");
}
let remainingLetters = wordToGuess.length;
let triesRemaining = 5;
let lettersEntered = [];

while (remainingLetters > 0 && triesRemaining > 0) {
    alert(answerArray.join(" ") + "\nTries remaining: " + triesRemaining + "\nLetters used: " + lettersEntered.join(", "));

    let guess = prompt("Guess a letter, or click cancel to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1){
        alert("Please enter a single letter.");
    } else {
        guess = guess.toLowerCase();
        lettersEntered.push(guess);
        let letterGuessed = false;
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === guess && answerArray[i] === "_") {
                answerArray[i] = guess;
                remainingLetters--;
                letterGuessed = true;
            }
        }
        if (!letterGuessed) {
            triesRemaining--;
            alert("Tries remaining: " + triesRemaining);
        }
    }
}
if (triesRemaining === 0){
    alert ("You lose. Correct answer was " + wordToGuess);
} else {
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + wordToGuess);
}