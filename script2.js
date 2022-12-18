const options = ["rock", "paper", "scissors"];

let playerSelection = null;
let computerSelection = options[Math.floor(Math.random() * 3)];
let playerScore = 0;
let computerScore = 0;

alert("Let's play a game of rock paper and scissors!");


function userInput(){
    let inputValid = false;
    while (!inputValid) {
        let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase().trim();
        if (options.includes(playerSelection)) {
            inputValid = true;
            return playerSelection;
        }
        else {
            console.log("Please enter either rock, paper or scissors.");
        }
    }
    
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = userInput();
        computerSelection = options[Math.floor(Math.random() * 3)];
        console.log(i + "st game: " + "You: " + playerSelection + " Computer: " + computerSelection);
        playRound(playerSelection,computerSelection);
        console.log(`Your score: ${playerScore} Computers score: ${computerScore}`);
        
    }

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("It's a tie.");
        }
        else if (computerSelection == "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }
        else if (computerSelection == "scissors"){
            console.log("You win! Rock beats scissors.");
            playerScore++;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Papers beats rock.");
            playerScore++;
        }
        else if (computerSelection == "paper") {
            console.log("It's a tie.");
        }
        else if(computerSelection == "scissors"){
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
    }
    else {
        if (computerSelection == "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
        else if (computerSelection == "paper") {
            console.log("You win! Scissors beats paper.");
            playerScore;
        }
        else if (computerSelection == "scissors"){
            console.log("It's a tie.");
        }
    }
}

game();

if (playerScore > computerScore) {
    alert(`You win! You:${playerScore} Computer:${computerScore}`);
}
else if(playerScore < computerScore){
    alert(`You lose! You:${playerScore} Computer:${computerScore}`);
}
else if(playerScore == computerScore){
    alert("It's a tie!");
}