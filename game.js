function computerPlay(){
  //randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
  let random = Math.floor(Math.random() * 3 );
  let options = ['rock', 'paper', 'scissors'];
  return options[random];
}

let computerSelection;
let playerScore = 0,
    computerScore = 0;
let computerDisplay = document.getElementById("computer-turn");
// let computerSelection = computerPlay();


function playRound(playerSelection) {

  computerSelection = computerPlay();


  if(playerSelection === computerSelection) {
    console.log("It's a tie!")
    document.getElementById("computer-turn").innerHTML = computerSelection;
  } else if(playerSelection === 'rock'){
    if(computerSelection === 'scissors') {
      document.getElementById("computer-turn").innerHTML = computerSelection;
      playerScore++;
    } else {
      document.getElementById("computer-turn").innerHTML = computerSelection;
      computerScore++;
    }
  }
  if(playerSelection === 'paper'){
    if(computerSelection === 'rock') {
      document.getElementById("computer-turn").innerHTML = computerSelection;
      playerScore++;
    } else {
      document.getElementById("computer-turn").innerHTML = computerSelection;
      computerScore++;
    }
  }
  if(playerSelection === 'scissors'){
    if(computerSelection === 'paper') {
      document.getElementById("computer-turn").innerHTML = computerSelection;

      playerScore++;
    } else {
      document.getElementById("computer-turn").innerHTML = computerSelection;
      computerScore++;
    }
  }

  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}


function reset(){
  playerScore = 0;
  computerScore = 0;

  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('computerScore').innerHTML = computerScore;

  document.getElementById("computer-turn").innerHTML = "";
}
