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