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

function getHumanChoice() {
    //Prompt user for pick//
    let choice = prompt("What's your choice?:");
    //Return the choice as uppercase//
    //This is to ensure case insensitivity//
    return choice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    //Declare winner variable//
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

function playGame() {
    //Declare scores//
    let humanScore = 0;
    let computerScore = 0;
    //Play through five rounds//
    for (let i = 0; i < 5; i++) {
        //Call and hold results of both player choices//
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        //Plays the round//
        roundResult = playRound(humanSelection, computerSelection);
        //Updates scores//
        if (roundResult < 0) {
            computerScore++;
        } else if (roundResult > 0) {
            humanScore++;
        } else {

        }
        //Display scores after each round//
        console.log(`Score is: User = ${humanScore} / Comp = ${computerScore}`);
    }
    //Display the match results//
    console.log(`Match Results: \nUser = ${humanScore} / Comp = ${computerScore}`);
    //Decide and display the winner//
    if (humanScore > computerScore) {
        console.log("Congrats, you won the match!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the match.");
    } else {
        console.log("The match is a draw.");
    }
}

playGame();