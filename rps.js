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
    
    console.log(`You threw: ${humanChoice}`);
    console.log(`The computer threw: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log(`Nice! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log(`Nice! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log(`Nice! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log(`Oops! ${computerChoice} beats ${humanChoice}!`);
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log(`Oops! ${computerChoice} beats ${humanChoice}!`);
    } else {
        console.log(`Oops! ${computerChoice} beats ${humanChoice}!`);
    } 
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

