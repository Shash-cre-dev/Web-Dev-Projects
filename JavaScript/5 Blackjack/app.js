let firstCard = 7;
let SecondCard = 14;
let sum = firstCard + SecondCard;
let hasBlackJack = false;
let isAlive = true
let message = ""

//For the STATE of the GAME
//JS doesn't keep track of which console was logged out recently
//in order to check for a Blackjack, we will define a boolean variable hasBlackJack = false;
//as initially we don't have a Blackjack.

//For message passing during the Game, message
let messageEl = document.getElementById("message-el")

function startGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message    
}



