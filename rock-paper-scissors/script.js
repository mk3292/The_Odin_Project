let playerScore = 0;
let computerScore = 0;


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
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose what you want");
        let computerSelection = getComputerChoice();
        console.log(aRound(playerSelection, computerSelection));
        console.log("You score is: " + playerScore);
        console.log("Computer score is: " + computerScore);
    }

    if (playerScore > computerScore) {
        return "You win the game";
    }

    else if (playerScore < computerScore) {
        return "You lose";
    }

    else {
        return "It's a tie";
    }
}