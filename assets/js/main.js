const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice(){
  const choice = prompt(`[Human: ${humanScore} x Computer: ${computerScore}] Please, select Rock, Paper or Scissor: `);
  if(!choices.find((item)=> item.toLowerCase() === choice.toLowerCase())){
    alert('Invalid option');
    getHumanChoice();
  }
  return choice;
}

function getMessage(a, b, result){
  let message;
  if(result === undefined){
    message = `We have a tie! You choose ${a} and the computer choose ${b}`;
  }else if(result === true){
    humanScore++;
    message = `You win! ${a} beats ${b}`;
  }else{
    computerScore++;
    message = `You lose! ${b} beats ${a}`;
  }
  return message;
}
function getWinner(a, b){
  const choiceA = a.toLowerCase();
  const choiceB = b.toLowerCase();
  
  switch(true){
    case choiceA === "rock" && choiceB === "paper":
      return false;
    case choiceA === "rock" && choiceB === "scissor":
      return true;
    case choiceA === "paper" && choiceB === "rock":
      return true;
    case choiceA === "paper" && choiceB === "scissor":
      return false;
    case choiceA === "scissor" && choiceB === "paper":
      return true;
    case choiceA === "scissor" && choiceB === "rock":
      return false;
    default: 
      return undefined;
  }
}

function playRound(humanChoice, computerChoice){
  const winner = getWinner(humanChoice, computerChoice);
  const message = getMessage(humanChoice, computerChoice, winner);

  alert(message);
}



function playGame(){
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  
  playRound(humanChoice, computerChoice);
  
  if(humanScore === 5){
    alert("You win!!!")
  }else if(computerScore === 5){
    alert("You lose")
  }else{
    playGame();
  }
}

document.getElementById("start").addEventListener("click", playGame)