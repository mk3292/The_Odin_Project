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
            console.log("You tie");
        }
        else if (computerSelection === 'scissors') {
            console.log("You win");
            playerScore += 1;
        }
        else {
            console.log("You lose");
            computerScore += 1;
        }
    }

    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            console.log("You lose");
            computerScore += 1;
        }
        else if (computerSelection === 'scissors') {
            console.log("You tie");
        }
        else {
            console.log("You win");
            playerScore += 1;
        }
    }
    
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            console.log("You win");
            playerScore += 1;
        }
        else if (computerSelection === 'scissors') {
            console.log("You lose");
            computerScore += 1;
        }
        else {
            console.log("You tie");
        }

    }
    console.log("You score is: " + playerScore);
    console.log("Computer score is: " + computerScore);

}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose what you want");
        let computerSelection = getComputerChoice();
        aRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log("You win the game");
    }
    else if (playerScore < computerScore) {
        console.log("You lose");
    }
    else {
        console.log("Its a tie");
    }
}