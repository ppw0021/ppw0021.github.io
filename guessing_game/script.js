let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  let humanDifference = Math.abs(secretNumber - humanGuess);
  let computerDifference = Math.abs(secretNumber - computerGuess);
  if (humanDifference == computerDifference) {
    //Tie, human wins
    return true;
  } else if (humanDifference < computerDifference) {
    //Hum wins
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
    return;
  } if (winner === 'computer') {
    computerScore++;
    return;
  } else {
    return;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}
