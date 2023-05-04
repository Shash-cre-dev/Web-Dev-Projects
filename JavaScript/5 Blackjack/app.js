let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

//For the STATE of the GAME
//JS doesn't keep track of which console was logged out recently
//in order to check for a Blackjack, we will define a boolean variable hasBlackJack = false;
//as initially we don't have a Blackjack.

//For message passing during the Game, message
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    return 5
}

function startGame() {
    renderGame()
}

function renderGame(){  
    cardsEl.textContent = "Cards: "  
    //loop that renders out all the cards 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
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

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}


