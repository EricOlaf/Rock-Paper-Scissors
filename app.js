//caching the dom is numero uno (storing something for future use, and avoids the process of getting something more than once)
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  return "SCISSORS";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(4).sup();
  const smallCompWord = "comp".fontsize(4).sub();
  result_p.innerHTML = `${convertToWord(
    user
  )} ${smallUserWord} beats ${convertToWord(
    computer
  )} ${smallCompWord} . You WIN!`;
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(4).sub();
  const smallCompWord = "comp".fontsize(4).sup();
  result_p.innerHTML = `${convertToWord(
    user
  )} ${smallUserWord}  loses to ${convertToWord(
    computer
  )} ${smallCompWord} . You lost`;
}

function draw(user) {
  const smallUserWord = "user".fontsize(4).sub();
  const smallCompWord = "comp".fontsize(4).sub();
  result_p.innerHTML = `${convertToWord(
    user
  )} for both ${smallUserWord} and ${smallCompWord}. It's a draw. `;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}

main();
