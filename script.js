function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(){
    let playerChoice = prompt("Do you pick rock, paper or scissors?");
    let computerChoice = getComputerChoice();
    if ((computerChoice == 'Rock' && playerChoice.toLowerCase()== 'rock') || 
        (computerChoice == 'Paper' && playerChoice.toLowerCase()== 'paper') ||
        (computerChoice == 'Scissors' && playerChoice.toLowerCase()== 'scissors')){
        return "It's a Tie!";
    } else if ((computerChoice == 'Paper' && playerChoice.toLowerCase()== 'rock') ||
              (computerChoice == 'Rock' && playerChoice.toLowerCase()== 'scissors') ||
              (computerChoice == 'Scissors' && playerChoice.toLowerCase()== 'paper')){
        return "You Lose!"; 
    } else if ((computerChoice == 'Scissors' && playerChoice.toLowerCase()== 'rock') ||
              (computerChoice == 'Paper' && playerChoice.toLowerCase()== 'scissors') ||
              (computerChoice == 'Rock' && playerChoice.toLowerCase()== 'paper')){
        return "You Win!";
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound());
    }
}

game();