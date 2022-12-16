const options = ["rock", "paper", "scissors"];

let playerSelection = prompt("Choose one: rock, paper, scissors");
let computerSelection = options[Math.floor(Math.random() * 3)];

function game() {
    for (let i = 0; i < 4; i++) {
        playerSelection = prompt("Choose one!");
        computerSelection = options[Math.floor(Math.random() * 3)];
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        playRound(playerSelection,computerSelection);
    }
    alert("Game over!");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("It's a tie.");
        }
        else if (computerSelection == "paper") {
            console.log("You lose! Paper beats rock.");
        }
        else{
            console.log("You win! Rock beats scissors.");
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Papers beats rock.");
        }
        else if (computerSelection == "paper") {
            console.log("It's a tie.");
        }
        else {
            console.log("You lose! Scissors beats paper.");
        }
    }
    else {
        if (computerSelection == "rock") {
            console.log("You lose! Rock beats scissors.");
        }
        else if (computerSelection == "paper") {
            console.log("You win! Scissors beats paper.");
        }
        else {
            console.log("It's a tie.");
        }
    }
}

game();

