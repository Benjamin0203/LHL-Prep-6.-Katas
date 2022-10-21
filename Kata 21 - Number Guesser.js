let prompt = require("prompt-sync")();

// code below (replace this example)
const getRandom = () => {
  return Math.ceil(Math.random() * 100);
}

const secretNum = getRandom();
let answer = undefined;
let history = [];

while (answer != secretNum) {
  answer = prompt('Guess a number: ');
  if (!Number(answer)) {
    console.log('Not a number! Try again!');
  }
  else if (history.includes(answer)) {
    console.log('Already Guessed!')
  }
  else {
    if (answer  > secretNum) {
      console.log('Too High!');
    }
    else if (answer < secretNum) {
      console.log('Too Low!');
    }
    else {
      console.log(`You got it! You took ${history.length + 1} attempts!`);
    }
    history.push(answer);
  }
}

// let answerwer = prompt("Guess a number: ");
// console.log("You answerwered: " + answerwer);