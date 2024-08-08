//Guessing Game

//Random number Generation

function generateRandNum() {
  let minNum = document.getElementById("minInput").value;
  let maxNum = document.getElementById("maxInput").value;
  let randNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  return randNum;
}

let randNum = generateRandNum();

// comparing userInput and displaying output

function UserInputCompare() {
  let userInput = parseInt(document.getElementById("userInput").value);

  if (userInput !== randNum) {
    document.getElementById("result").innerText = `Wrong guess! It was ${randNum}.`
  }
  else {
    document.getElementById("result").innerText = `Correct guess! It was ${randNum}.`
  }
}
