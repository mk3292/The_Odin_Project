function getComputerChoice () {
    let choice = [
        "rock",
        "paper",
        "scissors"
    ];

    let randomIndex = Math.floor(Math.random()*choice.length);
    return choice[randomIndex];
}
