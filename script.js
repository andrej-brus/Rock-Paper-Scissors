let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('#btn');

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function resetButton(){
    document.querySelector('.rstBtn').style.display = 'none';
    if (playerScore == 5 || computerScore == 5){
        document.querySelector('.rstBtn').style.display = 'block';
        document.querySelectorAll('.btn').forEach((e)=>{e.disabled = true});
        rstBtn.addEventListener('click',function(){
            playerScore = 0;
            computerScore = 0;
            document.getElementById('score').innerText = ''
            document.querySelectorAll('.btn').forEach((e)=>{e.disabled = false});
            document.querySelector('.rstBtn').style.display = 'none';
        })
    } 
}


resetButton();

function playRound(playerChoice){
    let score = "";
    let computerChoice = getComputerChoice();

    if (computerChoice == playerChoice){
        score = ("\nIt's a tie. You both chose " + computerChoice
        + "\n\nYour score: " + playerScore + "\nComputer Score: " + computerScore);
        resetButton();

    } else if ((computerChoice == 'paper' && playerChoice == 'rock') ||
              (computerChoice == 'rock' && playerChoice == 'scissors') ||
              (computerChoice == 'scissors' && playerChoice == 'paper')){

                computerScore +=1;
                score = ("\nYou lose! " + computerChoice + " beats " + playerChoice
                + "\n\nYour score: " + playerScore + "\nComputer score: " + computerScore);

                if (computerScore == 5) {
                    score += "\n\nYou lost the game! Click the reset button to play again.\n\n";
                    resetButton();
                }

    } else {
        playerScore +=1;
        score = ("\nYou win! " + playerChoice + " beats " + computerChoice
        + "\n\nYour score: " + playerScore + "\n" + "Computer score: " + computerScore);

        if (playerScore == 5) {
            score += "\n\nYou won the game! Click the reset button to play again.\n\n";
            resetButton();
        }
    }

    document.getElementById('score').innerText = score;
    return score;

}

buttons.forEach(btn => {
    btn.addEventListener('click', function(){
    playRound(btn.value);
})
})
