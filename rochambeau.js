const MAX_ROUNDS = 5;

const GUESS_OPTIONS = new Array("Rock", "Paper", "Scisors");
Object.freeze(GUESS_OPTIONS);

const computerPlay = function () {
    let guess = Math.floor(Math.random() * GUESS_OPTIONS.length);
    return GUESS_OPTIONS[guess];
}

const getUserSelection = function () {
    let userInput;
    let userAttempts = 0;
    while (true) {

        if (userAttempts == 0)
            userInput = prompt("What will it be? Enter your selection (Rock, Paper or Scisors)");
        else
            userInput = prompt("Hmm.. I didn't understand that last input. Try again? Enter your selection (Rock, Paper or Scisors)");

        if (userInput === GUESS_OPTIONS[0] || userInput === GUESS_OPTIONS[1] || userInput === GUESS_OPTIONS[2])
            break;

        userAttempts++;
    }
    return userInput;
}

const checkWinner = function (playerSelection, computerSelection) {
    if (playerSelection == GUESS_OPTIONS[0]) {
        switch (computerSelection) {
            case GUESS_OPTIONS[0]:
                return "It's a draw";
            case GUESS_OPTIONS[1]:
                computer_score++;
                return "Computer won!";
            case GUESS_OPTIONS[2]:
                player_score++;
                return "Player won!";
            default:
                return "Something went wrong 1!"
        }
    }
    else if (playerSelection == GUESS_OPTIONS[1]) {
        switch (computerSelection) {
            case GUESS_OPTIONS[0]:
                player_score++;
                return "Player won!";
            case GUESS_OPTIONS[1]:
                return "It's a draw";
            case GUESS_OPTIONS[2]:
                computer_score++;
                return "Computer won!";
            default:
                return "Something went wrong 2!"
        }
    }
    else if (playerSelection == GUESS_OPTIONS[2]) {
        switch (computerSelection) {
            case GUESS_OPTIONS[0]:
                computer_score++;
                return "Computer won!";
            case GUESS_OPTIONS[1]:
                player_score++;
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

const playRound = function () {
    let computerSelection = computerPlay();
    let userSelection = getUserSelection();

    console.log(`Player selected ${userSelection}, Computer selected ${computerSelection} and ${checkWinner(userSelection, computerSelection)}`);
}

const game = function () {
    reset();

    for (let i = 0; i < MAX_ROUNDS; i++) {
        playRound();
    }

    if (player_score > computer_score)
        alert("GAME OVER! PLAYER WON!");
    else
        alert("GAME OVER! COMPUTER WON!");
}

const reset = function () {
    player_score = 0;
    computer_score = 0;
}

let player_score = 0;
let computer_score = 0;

game();
