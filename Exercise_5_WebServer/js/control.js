var userChoice = prompt("Do you want rock, paper, or scissors?");
var computerRandom = Math.random();
var computerChoice;

if (computerRandom < 0.33) {
  computerChoice = "rock";
} else if (computerRandom < 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

console.log("Computer chose: " + computerChoice);
console.log("You chose: " + userChoice);

var userWins =
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper");

var draw = userChoice === computerChoice;

if (draw) {
  console.log("It's a draw!");
} else if (userWins) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}