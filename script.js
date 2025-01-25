/*
// Declare human and computer scores
let humanScore = 0;
let computerScore = 0;

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Get human choice
function getHumanChoice() {
    let answer = prompt("Rock, paper or scissors. Which do you choose?");
    answer = answer.toLowerCase();

    while (answer !== 'rock' && answer !== 'paper' && answer !== 'scissors') {
        answer = prompt('Try again! Must choose rock, paper or scissors.')
    }
    
    return answer;
}

// Write a function to play a round
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice == 'rock') {
        if (computerChoice =='scissors') {
            humanScore++;
            console.log("Scissors beats paper! Human: " + humanScore + " - Computer " + computerScore); 
        } else if (computerChoice = 'paper') {
            computerScore++;
            console.log("Paper beats rock! Human: " + humanScore + " - Computer " + computerScore); 
        } else {
            console.log("It's a draw!");
        }
    } else if (humanScore == 'paper') {
        if (computerChoice =='rock') {
            humanScore++;
            console.log("Paper beats rock! Human: " + humanScore + " - Computer " + computerScore); 
        } else if (computerChoice = 'scissors') {
            computerScore++;
            console.log("Scissors beats paper! Human: " + humanScore + " - Computer " + computerScore); 
        } else {
            console.log("It's a draw!");
        }
    } else {
        if (computerChoice =='rock') {
            humanScore++;
            console.log("Rock beats scissors! Human: " + humanScore + " - Computer " + computerScore); 
        } else if (computerChoice = 'paper') {
            computerScore++;
            console.log("Scissors beats paper! Human: " + humanScore + " - Computer " + computerScore); 
        } else {
            console.log("It's a draw!");
        }
    }
}

function playGame() {
    while(humanScore + computerScore < 5) {
        playRound();
    }
}
playGame();
*/

// Declare human and computer scores
let humanScore = 0;
let computerScore = 0;

const display = document.querySelector('.display');

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Create variables for buttons and start game everytime they're clicked

function getHumanChoice() {
    let answer = this.textContent.toLowerCase();
    console.log(answer);
    return answer;
};


const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

function playRound(humanChoice, computerChoice) {
    humanChoice = this.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    if (humanChoice === 'rock') {
        if (computerChoice ==='scissors') {
            humanScore++;
            display.textContent = ("Scissors beats paper! Human: " + humanScore + " - Computer " + computerScore);
        } else if (computerChoice === 'paper') {
            computerScore++;
            display.textContent = ("Paper beats rock! Human: " + humanScore + " - Computer " + computerScore);
        } else {
            display.textContent = ("It's a draw! Human: " + humanScore + " - Computer " + computerScore);
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice ==='rock') {
            humanScore++;
            display.textContent = ("Paper beats rock! Human: " + humanScore + " - Computer " + computerScore);
        } else if (computerChoice === 'scissors') {
            computerScore++;
            display.textContent = ("Scissors beats paper! Human: " + humanScore + " - Computer " + computerScore);
        } else {
            display.textContent = ("It's a draw! Human: " + humanScore + " - Computer " + computerScore);
        }
    } else {
        if (computerChoice ==='rock') {
            humanScore++;
            display.textContent = ("Rock beats scissors! Human: " + humanScore + " - Computer " + computerScore);
        } else if (computerChoice === 'paper') {
            computerScore++;
            display.textContent = ("Scissors beats paper! Human: " + humanScore + " - Computer " + computerScore);
        } else {
            display.textContent = ("It's a draw! Human: " + humanScore + " - Computer " + computerScore);
        }
    }
    checkWinner();
};

function checkWinner() {
    if (humanScore === 5) {
        display.textContent = "Game over! Player wins. Play again?";
        humanScore = 0;
    } else if (computerScore === 5) {
        display.textContent = "Game over! Computer wins. Play again?";
        computerScore = 0;
    };
};