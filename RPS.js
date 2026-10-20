/*
pseudocode
if the number <=0.33 then the answer is rock, 
elseif the number is <=0.67 then the answer is paper,
otherwise scissors
*/

function getComputerChoice() {
    let numb = Math.random();
    if (numb <= 0.33) {return "rock";}
    else if (numb <= 0.67) {return "paper";}
    else {return "scissors";}
}
console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Enter your choice");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

/*
if humanChoice === computerChoice then print draw; 
elseif (humanChoice  === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock"); console.log("human win") and add 1 to the humanScore
else computer wins; console.log("computer wins") and add 1 to the computerScore
*/

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("Human wins, computer loses"); humanScore ++;
    } else {console.log("computer wins, human loses"); computerScore ++}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);