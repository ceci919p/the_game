// Player 1 = User
// Player 2 = Computer
let randHand;
let userChoice;
let computerChoice;
let result;
//let computerChoice;

const rockButton = document.querySelector(".rock");
const scissorsButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");
const playerOne = document.querySelector("#player1");
const playerTwo = document.querySelector("#player2");

document.addEventListener("DOMContentLoaded", userChooses);

function userChooses() {
  rockButton.addEventListener("click", userButtonClicked);
  scissorsButton.addEventListener("click", userButtonClicked);
  paperButton.addEventListener("click", userButtonClicked);
  console.log("HEJ");
  //   computerChooses();
}

function userButtonClicked(evt) {
  if (evt.target.classList.contains("scissors")) {
    userChoice = "scissors";
  } else if (evt.target.classList.contains("rock")) {
    userChoice = "rock";
  } else if (evt.target.classList.contains("paper")) {
    userChoice = "paper";
  }
  console.log("user: " + userChoice);
  computerChooses();
  //    console.log("button clicked", evt.target.classList.contains("scissors"));
}

function computerChooses() {
  randHand = Math.floor(Math.random() * 3) + 1;

  if (randHand === 1) {
    computerChoice = "scissors";
  } else if (randHand === 2) {
    computerChoice = "rock";
  } else {
    computerChoice = "paper";
  }
  console.log("com: " + computerChoice);
  startCountdown();
}

function startCountdown() {
  playerOne.classList.remove("rock");
  playerOne.classList.remove("paper");
  playerOne.classList.remove("scissors");

  playerTwo.classList.remove("rock");
  playerTwo.classList.remove("paper");
  playerTwo.classList.remove("scissors");

  playerOne.classList.add("shake");
  playerTwo.classList.add("shake");
  playerOne.addEventListener("animationend", showHands);
  console.log("countdown");
}
function showHands() {
  playerOne.classList.remove("shake");
  playerTwo.classList.remove("shake");

  if (userChoice === "rock") {
    playerOne.classList.add("rock");
  } else if (userChoice === "paper") {
    playerOne.classList.add("paper");
  } else if (userChoice === "scissors") {
    playerOne.classList.add("scissors");
  }

  if (computerChoice === "rock") {
    playerTwo.classList.add("rock");
  } else if (computerChoice === "paper") {
    playerTwo.classList.add("paper");
  } else if (computerChoice === "scissors") {
    playerTwo.classList.add("scissors");
  }

  console.log("show hands");
  determineWinner();
}

function determineWinner() {
  if (userChoice === "rock") {
    if (computerChoice === "rock") {
      result = "tie";
      console.log("tie");
    } else if (computerChoice === "paper") {
      result = "computer wins";
      console.log("computer wins");
    } else if (computerChoice === "scissors") {
      result = "user wins";
      console.log("user wins");
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      result = "user wins";
      console.log("user wins");
    } else if (computerChoice === "paper") {
      result = "tie";
      console.log("tie");
    } else if (userChoice === "scissors") {
      result = "computer wins";
      console.log("computer wins");
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      result = "computer wins";
      console.log("computer wins");
    } else if (computerChoice === "paper") {
      result = "user wins";
      console.log("user wins");
    } else if (computerChoice === "scissors") {
      result = "tie";
      console.log("tie");
    }
  }
  console.log("end");
}
