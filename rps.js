function getComputerChoice() {
    //Declare variables//
    let randNum = Math.floor(Math.random() * 3);
    let choice = "";
    //Choose between three items//
    if (randNum === 0) {
        choice = "Rock";
    } else if (randNum === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors"
    }
    //Return the choice//
    return console.log(choice);
}

getComputerChoice();