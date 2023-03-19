// Create guessNumber() function.
const guessNumber = (numGuess) => {
    let targetNum = Math.floor(Math.random() * 10 + 1);
    if (targetNum === numGuess) {
        return "You won.";
    } else {
        return "Computer won.";
    }
}

// Test function.
console.log(guessNumber(2));