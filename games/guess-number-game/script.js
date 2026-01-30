let number = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    attempts++;
    let guess = document.getElementById("guess").value;
    let result = document.getElementById("result");

    if (guess == number) {
        result.textContent = "Correct! 🎉 Attempts: " + attempts;
    } else if (guess > number) {
        result.textContent = "Too high! Attempts: " + attempts;
    } else {
        result.textContent = "Too low! Attempts: " + attempts;
    }
}
