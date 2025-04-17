//Declare scores//
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //Set a variable with a random number//
    let randNum = Math.floor(Math.random() * 3);
    //Choose between three items//
    let choice = "";
    if (randNum === 0) {
        choice = "Rock";
    } else if (randNum === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    //Return the choice as uppercase//
    //This is to ensure case insensitivity//
    return choice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    //Declare winner variable//
    let winner = 0;
    //Decide the winner//
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log(`Nice! ${humanChoice} beats ${computerChoice}!`);
        winner++;
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log(`Nice! ${humanChoice} beats ${computerChoice}!`);
        winner++;
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log(`Nice! ${humanChoice} beats ${computerChoice}!`);
        winner++;
    } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log(`Oops! ${computerChoice} beats ${humanChoice}!`);
        winner--;
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log(`Oops! ${computerChoice} beats ${humanChoice}!`);
        winner--;
    } else {
        console.log(`Oops! ${computerChoice} beats ${humanChoice}!`);
        winner--;
    } 
    //Return the winner//
    return winner;
}

function playRoundWithChoice(humanInput) {
    //Call and hold results of both player choices//
    const humanSelection = humanInput.toUpperCase();
    const computerSelection = getComputerChoice();
    //Plays the round//
    roundResult = playRound(humanSelection, computerSelection);

    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");

    if (roundResult < 0) {
        computerScore++;
    } else if (roundResult > 0) {
        humanScore++;
    }

    resultsDiv.textContent = `You threw ${humanSelection}, the computer threw ${computerSelection}`;
    scoreDiv.textContent = `Score: You ${humanScore} | Computer ${computerScore}`;

    // Check for end of game
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You win!" : "Computer wins!";
        resultsDiv.textContent += `\n${winner}`;
    }
}

document.getElementById("rockB").addEventListener("click", () => playRoundWithChoice("rock"));
document.getElementById("paperB").addEventListener("click", () => playRoundWithChoice("paper"));
document.getElementById("scissorsB").addEventListener("click", () => playRoundWithChoice("scissors"));