const MAX_ROUNDS = 5;

const GUESS_OPTIONS = ["Rock", "Paper", "Scissors"];

const computerPlay =  () => {
    let computerGuess = Math.floor(Math.random() * GUESS_OPTIONS.length);
    return GUESS_OPTIONS[computerGuess];
}

const getUserSelection = () => {
    
    let userInput;
    let userAttempts = 0;

    while(true) {

        const promptMessage = userAttempts === 0 ? "What will it be? Enter your selection (Rock, Paper, Scissors)" : `Invalid input! Please enter "Rock", "Paper", or "Scissors"`;

        userInput = prompt(promptMessage);

        if(userInput === null) {
            throw new Error('Game cancelled by user');
        }

        userInput = userInput.trim().toLowerCase();
        const validOptions = GUESS_OPTIONS.map(option => option.toLowerCase())

        if (validOptions.includes(userInput)) {
            return GUESS_OPTIONS[validOptions.indexOf(userInput)]
        }

        userAttempts ++;
    }
}

const checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection == GUESS_OPTIONS[0]) {
        switch (computerSelection) {
            case GUESS_OPTIONS[0]:
                return "It's a draw";
            case GUESS_OPTIONS[1]:
                computerScore++;
                return "Computer won!";
            case GUESS_OPTIONS[2]:
                playerScore++;
                return "Player won!";
            default:
                return "Something went wrong 1!"
        }
    }
    else if (playerSelection == GUESS_OPTIONS[1]) {
        switch (computerSelection) {
            case GUESS_OPTIONS[0]:
                playerScore++;
                return "Player won!";
            case GUESS_OPTIONS[1]:
                return "It's a draw";
            case GUESS_OPTIONS[2]:
                computerScore++;
                return "Computer won!";
            default:
                return "Something went wrong 2!"
        }
    }
    else if (playerSelection == GUESS_OPTIONS[2]) {
        switch (computerSelection) {
            case GUESS_OPTIONS[0]:
                computerScore++;
                return "Computer won!";
            case GUESS_OPTIONS[1]:
                playerScore++;
                return "Player won!";
            case GUESS_OPTIONS[2]:
                return "It's a draw";
            default:
                return "Something went wrong 3!"
        }
    }
    else {
        return "Something went wrong 4!"
    }
}

const playRound = () => {
    let computerSelection = computerPlay();
    let userSelection = getUserSelection();

    console.log(`Player selected ${userSelection}, Computer selected ${computerSelection} and ${checkWinner(userSelection, computerSelection)}`);
}

const game = () => {
    
    reset();

    for (let i = 0; i < MAX_ROUNDS; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        alert("GAME OVER! PLAYER WON!");
    } else if (playerScore < computerScore) {
        alert("GAME OVER! COMPUTER WON!");
    } else {
        alert("GAME OVER! IT'S A TIE!");
    }

    }

const reset = () => {
    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

game();
