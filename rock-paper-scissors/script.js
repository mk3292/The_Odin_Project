let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');

rock.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
        playerScore = computerScore = 0;
        document.getElementById("yourScore").innerHTML = 'Your score: 0';
        document.getElementById("compScore").innerHTML = 'Computer score: 0';
        document.getElementById('winner').innerHTML = '';
    }
    else {
        const playChoi = 'rock';
        const compChoi = getComputerChoice();
        console.log(aRound(playChoi, compChoi));
        winner(playerScore, computerScore);
    }
});

scissors.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
        playerScore = computerScore = 0;
        document.getElementById("yourScore").innerHTML = 'Your score: 0';
        document.getElementById("compScore").innerHTML = 'Computer score: 0';
        document.getElementById('winner').innerHTML = '';
    }
    else {
        const playChoi = 'scissors';
        const compChoi = getComputerChoice();
        console.log(aRound(playChoi, compChoi));
        winner(playerScore, computerScore);
    }
});

paper.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
        playerScore = computerScore = 0;
        document.getElementById("yourScore").innerHTML = 'Your score: 0';
        document.getElementById("compScore").innerHTML = 'Computer score: 0';
        document.getElementById('winner').innerHTML = '';
    }
    else {
        const playChoi = 'paper';
        const compChoi = getComputerChoice();
        console.log(aRound(playChoi, compChoi));
        winner(playerScore, computerScore);
    }
});

function winner(pScore, cScore) {
    if (pScore <= 4 && cScore <= 4) {
        document.getElementById("yourScore").innerHTML = ('Your Score: ' + pScore);
        document.getElementById("compScore").innerHTML = ('Computer Score: ' + cScore);
    }
    else if (pScore == 5) {
        document.getElementById("yourScore").innerHTML = ('Your Score: ' + pScore);
        document.getElementById("compScore").innerHTML = ('Computer Score: ' + cScore);
        document.getElementById("winner").innerHTML = 'You Win! Click any button to play again';
        console.log("You win!");
    }

    else if (cScore == 5) {
        document.getElementById("yourScore").innerHTML = ('Your Score: ' + pScore);
        document.getElementById("compScore").innerHTML = ('Computer Score: ' + cScore);
        document.getElementById("winner").innerHTML = 'Computer Wins! Click any button to play again';
        console.log("Computer wins!");
    }
}

function getComputerChoice () {
    let choice = [
        "rock",
        "paper",
        "scissors"
    ];

    let randomIndex = Math.floor(Math.random()*choice.length);
    return choice[randomIndex];
}

function aRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return "Rock and rock results in tie";
        }
        
        else if (computerSelection === 'scissors') {    
            playerScore += 1;
            return "You win, rock beats scissors";
        }
        
        else {
            computerScore += 1;
            return "You lose, rock gets wrapped by paper";
        }
    }

    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1;
            return "You lose, scissors get crushed with rock";
        }
        
        else if (computerSelection === 'scissors') {
            return "Scissors and scissors results in tie";
        }
        
        else {
            playerScore += 1;
            return "You win, scissors beats paper";
        }
    }
    
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1;
            return "You win, paper beats rock";
        }

        else if (computerSelection === 'scissors') {   
            computerScore += 1;
            return "You lose, paper loses to scissors";
        }

        else {
            return "Paper and paper results in tie";
        }
    }
}

function game() {
    const playerSelection = prompt("Choose what you want");
    let computerSelection = getComputerChoice();
    console.log(aRound(playerSelection, computerSelection));
    console.log("You score is: " + playerScore);
    console.log("Computer score is: " + computerScore);

    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    }

    else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    }

    winner(playerScore, computerScore);
}


