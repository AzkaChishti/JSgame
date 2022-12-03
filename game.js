alert("Welcome to Rock, Paper and Scissors game press OK to start")
playGame(5);
function playRound(computerSelection, playerSelection) {
    if (
      (playerSelection == "rock" && computerSelection == "rock") ||
      (playerSelection == "paper" && computerSelection == "paper") ||
      (playerSelection == "scissors" && computerSelection == "scissors")
    ) {
      console.log("draw, please play again");
      return playRound(computerPlay(), playerPlay());
    }
    if (
      (playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "rock")
    ) {
      console.log("you lose, Paper beats Rock");
      return { player: 0, computer: 1 };
    }
    if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ) {
      console.log("you won, Rock beats Scissors");
      return { player: 1, computer: 0 };
    }
  }
  function playerPlay() {
    let playerInput = prompt("enter your selecion Rock, Paper or Scissors")?.trim().toLowerCase();
  
    if (playerInput == null) {
      alert(
        "You have to play game, please enter the valid word (Rock, Paper or Scissors)"
      );
    }
  
    if (playerInput == "rock") {
      return playerInput;
    }
  
    if (playerInput == "paper") {
      return playerInput;
    }
  
    if (playerInput == "scissors") {
      return playerInput;
    } else {
      alert("Please eneter the valid word (Rock, Paper or Scissors)");
    }
  
    return playerPlay();
  }
function computerPlay() {
  let randomchoice = Math.random();

  if (randomchoice <= 0.3) {
    return "scissors";
  }

  if (randomchoice > 0.3 && randomchoice <= 0.7) {
    return "paper";
  }

  if (randomchoice > 0.7) {
    return "rock";
  }
}
function playGame(totalRound) {
  let totalScore = { player: 0, computer: 0 };

  let playerScore = totalScore.player;
  let computerScore = totalScore.computer;

  for (let i = 0; i < totalRound; i += 1) {
    console.log("round", i + 1);

    const roundScore = playRound(computerPlay(), playerPlay());

    playerScore = playerScore + roundScore.player;
    computerScore = computerScore + roundScore.computer;

    console.log(
      `Round ${
        i + 1
      }, Player score: ${playerScore} and Computer score: ${computerScore}`
    );
  }

  if (playerScore < computerScore) {
    console.log(`You lose with score ${playerScore}:${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log(`You win with score ${playerScore}:${computerScore}`);
  }

  if (playerScore == computerScore) {
    console.log(`It's a tie with score ${playerScore}:${computerScore}`);
  }
}