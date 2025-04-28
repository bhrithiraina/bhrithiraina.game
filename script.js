let attempts = 0;
let randomNum = Math.floor(Math.random() * 20 + 1);

const guess = document.getElementById("guess");
const Enter = document.getElementById("Enter");
const hint = document.getElementById("hint");

Enter.addEventListener("click", checkGuess);

function checkGuess() {
    const userValue = Number(guess.value);
    attempts++;

    if (userValue === randomNum ) {
        hint.textContent = "Congratulations, you have guessed it!";
    } else if (userValue < randomNum) {
        hint.textContent = "Too low! Try again.";
    } else {
        hint.textContent = "Too high! Try again."; 
    }
}