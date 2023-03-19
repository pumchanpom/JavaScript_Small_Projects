console.log('Welcome to Rock, Paper, or Scissors');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error');
    }
}

// getUserChoice('home');
// getUserChoice('paper');

const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 2);
    switch (num) {
        case 0:
        return 'rock';
    case 1:
        return 'paper';
    case 2:
        return 'scissors';
    }
}

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Tie.";
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return "Computer won.";
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return "Computer won";
    } else if (userChoice === 'scissors' && computerChoice === 'rock'){
        return "Computer won.";
    } else if (userChoice === 'bomb') {
        return "You won.";
    } else {
        return "You won."
    }
}

// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('paper', 'paper'));
// console.log(determineWinner('paper', 'rock'));

const playGame = inputFromUser => {
    let userChoice = getUserChoice(inputFromUser);
    let computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}

playGame('bomb');