// Guessing Game

let randNum;

// Random number generation
function generateRandNum() {
    let minNum = parseInt(document.getElementById("minInput").value);
    let maxNum = parseInt(document.getElementById("maxInput").value);

    randNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

// Comparing user input and displaying output
function userInputCompare() {
    let userInput = parseInt(document.getElementById("userInput").value);

    if (userInput !== randNum) {
        document.getElementById("result").innerText = `Wrong guess! It was ${randNum}.`;
    } else {
        document.getElementById("result").innerText = `Correct guess! It was ${randNum}.`;
    }
}