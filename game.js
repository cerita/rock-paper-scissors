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
  console.log(computerSelection);
  console.log(playerSelection)


  if(playerSelection === computerSelection) {
    console.log("It's a tie!")
    computerDisplay.innerHTML = computerSelection;
  } else if(playerSelection === 'rock'){
    if(computerSelection === 'scissors') {
      computerDisplay.innerHTML = computerSelection;
      playerScore++;
    } else {
      computerDisplay.innerHTML = computerSelection;
      computerScore++;
    }
  }
  if(playerSelection === 'paper'){
    if(computerSelection === 'rock') {
      computerDisplay.innerHTML = computerSelection;
      playerScore++;
    } else {
      computerDisplay.innerHTML = computerSelection;
      computerScore++;
    }
  }
  if(playerSelection === 'scissors'){
    if(computerSelection === 'paper') {
      computerDisplay.innerHTML = computerSelection;

      playerScore++;
    } else {
      computerDisplay.innerHTML = computerSelection;
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

  computerDisplay.innerHTML = "";
}
