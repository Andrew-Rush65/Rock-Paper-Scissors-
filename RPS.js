const container = document.querySelector(".container");
const userScore = document.querySelector(".userScore");
const computerScore = document.querySelector(".computerScore");
const userOptions = document.querySelectorAll(".userOption");
const resultBox = document.querySelector(".resultBox");

// option variable will hold the userOption's text content that is clicked
let option = "";
userOptions.forEach(btnClick);

// function that will run when a user option is clicked 
function btnClick(item) {
    item.onclick = function() {
        option = item.textContent; 
        playRound(option, computerPlay());
        trackScore()
    }
}

// function to track score and display to screen 
function trackScore() {
    if (parseInt(userScore.textContent) == 5 || parseInt(computerScore.textContent) == 5) {
        if (parseInt(userScore.textContent) > parseInt(computerScore.textContent)) {
            resultBox.textContent = `You Won the Game! You: ${parseInt(userScore.textContent)} CPU: ${parseInt(computerScore.textContent)}`
        } else {
            resultBox.textContent = `You Lost the Game! You: ${parseInt(userScore.textContent)} CPU: ${parseInt(computerScore.textContent)}`
        }
        userScore.textContent = 0;
        computerScore.textContent = 0;
    }
}

// function that will determine the winner based on user and cpu options 
function playRound(userOption, computerOption) {
    if (userOption == computerOption) {
        resultBox.textContent = `Draw! ${userOption} and ${computerOption}`;
    } else if (userOption == "Rock" && computerOption == "Scissors" || 
                userOption == "Paper" && computerOption == "Rock" ||
                userOption == "Scissors" && computerOption == "Paper") {
                    userScore.textContent = parseInt(userScore.textContent)+ 1;
                    resultBox.textContent = `You Won this Round! ${userOption} beats ${computerOption}`;
                } else {
                    computerScore.textContent = parseInt(computerScore.textContent) + 1;
                    resultBox.textContent = `You Lost this Round! ${computerOption} beats ${userOption}`;
                }
}

// function that will randomly select option for computer 
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)]
    }

















