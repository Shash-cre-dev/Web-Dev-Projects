//ROGER THAT

// 1. Create two variables, firstCard and secondCard. 

let firstCard_ = 7;
let SecondCard_ = 11;
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let sum_ = firstCard_ + SecondCard_;


// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 25

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age <= 21){
    console.log("You can not enter the club");
}
else{
    console.log("Welcome");
}

//For 21 <=


// Check if the person is elegible for a birthday card from the King! (100)

let age1 = 99

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age1 <100){
    console.log("Not Eligible! Keep Going");
}else if (age1 === 100){
    console.log("Here is your birthday card from the King!");
}else{
    console.log("Not elegible, you have already gotten one");
}

//=== is more strict compares both value and datatype
//100 == "100" -> true
//100 === "100" -> false

//Use === always for comparison


//FOR THE STATE OF THE GAME

let firstCard1 = 11
let secondCard1 = 11
let sum1 = firstCard1 + secondCard1
let hasBlackJack1 = false

// 1. Create a variable called isAlive and assign it to true
let isAlive1 = true

// 2. Flip its value to false in the appropriate code block 
if (sum1 <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum1 === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack1 = true
} else {
    console.log("You're out of the game! 😭")
    isAlive1 = false
}

// 3. Log it out to check that you're doing it right
console.log(isAlive1)



let firstCard2 = 10
let secondCard2 = 11
let sum2 = firstCard + secondCard + 4
let hasBlackJack2 = false
let isAlive2 = true

// 1. Declare a variable called message and assign its value to an empty string
let message2 = " "

// 2. Reassign the message variable to the string we're logging out
if (sum2 <= 20) {
    message2 = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message2 = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack2 = true
} else {
    message2 = "You're out of the game! 😭"
    isAlive2 = false
}

// 3. Log it out!
console.log(message2)


//startGame() onlick with <p id="message-el">Want to play a round?</p>

let firstCard3 = 10
let secondCard3 = 11
let sum = firstCard3 + secondCard3
let hasBlackJack5 = false
let isAlive5 = true
let message5 = ""

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startGame() {
    if (sum <= 20) {
        message5 = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message5 = "You've got Blackjack!"
        hasBlackJack5 = true
    } else {
        message5 = "You're out of the game!"
        isAlive5 = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message5
}


//FOR DISPLAYING SUM
let sumEl = document.getElementById("sum-el")
//rendering it inside startGame() for displaying sum
sumEl.textContent = "Sum: " + sum;

// 2. Store the cards paragraph in a variable called cardsEl
let cardEl = document.getElementById("cards-el")

 // 3. Render the cars on the page using this format -> "Cards: 10 4" inside startGame()
 cardEl.textContent = "Cards: " + firstCard + " " + secondCard




// <!-- 1. Create a NEW CARD button, make it run newCard() on click -->
//<button onclick="newCard()">NEW CARD</button>

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    console.log("Drawing a new card from the deck!")
}

//Adding margin between buttons
//button{
    // margin-top: 6px;
    // margin-bottom: 6px;
// }


// 1. Create a card variable, and hard code its value to a number (2-11)
let card2 = 6
// 2. Add the new card to the sum variable
sum += card2
// 3. Call startGame()
startGame()

//FOR ARRAYS

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
console.log(experience[1]);
// People counter for Norstat
console.log(experience[2]);
// CEO at Scrimba
console.log(experience[0]);

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

let intro = ["Shashank Kumar", 20, false];

//For adding an element to the end of the array
// Push the newMessage to the messages array, and then log out the array
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]
let newMessage = "Same here!"
messages.push(newMessage)

console.log(messages)


function newCard() {
    let card = 6
    sum += card
    // Push the card to the cards array
    cards.push(card)
    renderGame()
}


//FOR COUNTING
// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for(let i=10; i<=100; i++){
    console.log(i)
}


//COMBINING FOR LOOP WITH ARRAY

let messages1 = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]

for(let i=0; i<messages1.length; i++){
    console.log(messages1[i]);
}

//"Hey, how's it going?",        
//"I'm great, thank you! How about you?",
//"All good. Been working on my portfolio lately.",
//"Same here!",
//"Great to hear"


let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for(let i=0; i<cards.length; i++){
    console.log(cards[i])
}


//FOR RETURNING VALUE FROM A FUNCTION
// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function totalRaceTime(){
    return (player1Time + player2Time)
}

let totalTime = totalRaceTime()
console.log(totalTime)

//209


// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard() {
    return 5
}

// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard()
let secondCard = getRandomCard()

// 3. Use the getRandomCard() to set the value of card
let card = getRandomCard()

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice(){
    let randomNumber = Math.floor(Math.random()*6) + 1
    return randomNumber
} 

console.log(rollDice())

// Make this function return a random number between 1 and 13
function getRandomCard() {
    return Math.floor( Math.random()*13 ) + 1 // 1-13
}

//Improvising with respect to cards
//taken ace as 11// if (king, queen, jack) 11-13 taken 10

//MY CODE
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomCard =  Math.floor( Math.random()*13 ) + 1
    if(randomCard === 1){
        return 11
    }
    else if(randomCard === 11 || randomCard === 12 || randomCard === 13){
        return 10
    }
    else{
        return randomCard
    }
}

//ALTERNATE SOLUTION
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

//MODIFICATIONS IN THE GAME

//BEFORE GAME START
let hasBlackJack = false
let isAlive = false
let message = ""

//AFTER THE START OF THE GAME
function startGame() {
    //After clicking start Button
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

//FOR OBJECTS
// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    Name : "Kingsman",
    Rent : 100,
    Private : true,
    rooms: ["AC", "NON AC"]
}

console.log(castle.Name)
//Kingsman
console.log(castle.rooms)
//["AC", "NON AC"]

//MODIFYING CODE

// 1. Create a paragraph with an id of "player-el"
//<p id="player-el"><p></p>

// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    Name : " ",
    chips: " "
}
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.Name + " " + player.chips
