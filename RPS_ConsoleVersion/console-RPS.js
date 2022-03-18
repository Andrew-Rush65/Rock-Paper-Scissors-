function computerPlay() {
    let weapons = [`rock`, `paper`, `scissors`];
    return weapons[Math.floor(Math.random() * (3))]; 
}



function playGame(userWeapon, computerWeapon) {
    let userPoints = 0;
    let computerPoints = 0;
    let gameResult;
    for (i=0;i<5;i++) {
       let roundResult = playRound();
       if (roundResult == `tied`) {
            gameResult = `Your Score: ${userPoints} \n Computer Score: ${computerPoints}`;
            console.log(`You Tied this Round!`);
            console.log(gameResult);
            i--;
       } else if (roundResult == `You Lost!`) {
            computerPoints = computerPoints + 1;
            gameResult = `Your Score: ${userPoints} \n Computer Score: ${computerPoints}`;
            console.log(`You Lost this Round!`);
            console.log(gameResult);
       } else if (roundResult == `You Won!`) {
            userPoints = userPoints + 1;
            gameResult = `Your Score: ${userPoints} \n Computer Score: ${computerPoints}`;
            console.log(`You Won this Round!`);
            console.log(gameResult);
       } else {
            console.log(roundResult);
            i--;
       } 
    }
    (userPoints < computerPoints) ? gameResult =`You Lost the Game!\n${gameResult}` : 
    gameResult = `You Won the Game!\n${gameResult}`;
    return gameResult; 
}


function playRound(userWeapon, computerWeapon) {
        computerWeapon = computerPlay();
        userWeapon = prompt('Choose your weapon: "Rock", "Paper", "Scissors"').toLowerCase();
       if (userWeapon == computerWeapon) {
            return `tied`;
        } else if (
            (userWeapon == `rock` && computerWeapon == `paper`) || 
            (userWeapon == `paper` && computerWeapon === `scissors`) || 
            (userWeapon == `scissors` && computerWeapon == `rock`)) {
            return `You Lost!`;
        } else if (
            (computerWeapon == `rock` && userWeapon == `paper`) || 
            (computerWeapon == `paper` && userWeapon === `scissors`) || 
            (computerWeapon == `scissors` && userWeapon == `rock`)) {
            return `You Won!`
        } else {
           return `Please enter a valid weapon...`;
        }   
    }

