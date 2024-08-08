//Guessing game



//generating randomnumber
let minNum = document.getElementById("minInput").value;
let maxNum = document.getElementById("maxInput").value;

function generateRandNum() {
  let randNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  console.log(randNum);
  return randNum;
}


//taking userInput and storing it then comparing it

let userInput = document.getElementById("userInput").value;

function userInputCompare() {

  if (userInput !== randNum) {
    document.getElementById("result").textContent = `Wrong guess! It was ${randNum}`
  }
  else {
    document.getElementById("result").textContent = `Correct guess! It was ${randNum}`
  }
}

