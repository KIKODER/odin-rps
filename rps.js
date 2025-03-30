function getComputerChoice() {
    //Sets a variable with a random number//
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
    //Return the choice//
    return choice.toUpperCase();
}

function getHumanChoice() {
    //Prompts user for pick//
    let choice = prompt("What's your choice?:");
    //Return the choice//
    return choice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    //Declares winner variable//
    let winner = 0;
    //Display both choices//
    console.log(`You threw: ${humanChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
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



//Scores//
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//Play the round//
roundResult = playRound(humanSelection, computerSelection);
//Update scores//
if (roundResult < 0) {
    computerScore++;
} else if (roundResult > 0) {
    humanScore++;
} else {

}

//Displays scores//
console.log(`Score is: User = ${humanScore} / Comp = ${computerScore}`);
