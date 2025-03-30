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
    return choice;
}

function getHumanChoice() {
    //Prompts user for pick//
    let choice = prompt("What's your choice?:");
    //Return the choice//
    return choice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
