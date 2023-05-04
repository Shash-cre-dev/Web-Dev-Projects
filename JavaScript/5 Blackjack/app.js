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
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")


function startGame(){
    renderGame()
}

function renderGame(){
    if (sum <= 20) {
        cardEl.textContent = "Cards: " + firstCard + " " + SecondCard
        sumEl.textContent = "Sum: " + sum;
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

function newCard() {
    let card = 6
    sum += card
    renderGame()
}


