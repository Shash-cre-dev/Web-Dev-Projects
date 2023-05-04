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

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
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
let card = 6
// 2. Add the new card to the sum variable
sum += card
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




