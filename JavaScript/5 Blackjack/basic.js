//The expressions inside of the parenthesis passed to the conditionals is converted into a boolean by JS
//Either true or false

//Then the specific condition executes

console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false

//One way to select element from the DOM is by
let messageEl = document.getElementById("message-el")

//Another more dynamic way is by

let mssgEl = document.querySelector("#message-el")

// with .querySelector you have to specify the type of selector with #, . or just the name
document.querySelector("#message-el")  //element with id = "message-el"
document.querySelector(".message-el")  //element with class = "message-el"
document.querySelector("body")  //the body of the html

//for storing all cards we will use an array
//array is a ordered list of items

let cards1 = [firstCard, secondCard]
cardsEl.textContent = "Cards: " + cards1[0] + " " + cards1[1]

//array are zero indexed //0 indexed

//Examples of Arrays

let featuredPosts = ["Check out my Netflix Clone",
                        "Here's the code for my project", 
                        "I've just relaunched my portfolio"
];

let profile = ["Hi there Myself Shashank", "I am 20 years old", "I am 3rd Year at VITC"];

console.log(featuredPosts[0]);

console.log(profile[2]);


console.log( featuredPosts.length )
//length of array = no of items = final index + 1;

//IN JS

// Array - ordered list of items - composite / complex data type

//For adding an item to the end of an array use push

let cards = [7, 4]
//Adding elements at the end of the array
cards.push(6)
console.log(cards)
// [7, 4, 6]

//For removing last element of the array , use pop

cards.pop()
console.log(cards) // [7,4]


//FOR COUNTING
//Use for loop

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    console.log(count)
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

for ( let count = 1;  count < 11;  count += 2 )  { 
    console.log(count)
}

// 1
// 3
// 5
// 7
// 9


//USING ARRAY WITH DOM

let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for(let i=0; i<sentence.length; i++){
    greetingEl.textContent += sentence[i];
}

// How do you keep the spaces between the words if I remve them from the array?

let sentence1 = ["Hello", "my", "name", "is", "Per"] 
for(let i=0; i<sentence1.length; i++){
    greetingEl.textContent += sentence[i] +" " ;
}


//RETURNING VALUES FROM A FUNCTION

//use return 

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

//NOTE:

//FUNCTION DECLARATIONS ARE HOISTED ABOVE
//SO THEY CAN BE ACCESED FROM THE ABOVE LINES EVENTHOUGH FUNCTIONS ARE DEFINED AT THE 
//LATER STAGES OF THE CODE

//TO GENERATE RANDOM NUMBERS
//Math object is used in JS

let randomNumber = Math.random();
console.log(randomNumber);

//Math.random() generates a random number between 0 an 1 (1 not included)

//For a dice multiply by 6
let randomNumber1 = Math.random() * 6
console.log(randomNumber)

/* 
In which range will our randomNumber be now?
From: 0
To: 6 (6 not included)
*/

//TO CONVERT THIS RANDOM NUMBER INTO A WHOLE NUMBER USE Math.floor()

let flooredNumber = Math.floor(12.999999999999)
console.log(flooredNumber)

/* 
What does Math.floor() do to positive numbers?
Your answer: returns the smallest integer less than the given number or it removes the decimals
*/

//SHORTCUT FOR GENERATING RANDOM NUMBER
let randomNumber3 = Math.floor( Math.random() * 6 )
console.log(randomNumber3)
// 0 | 1 | 2 | 3 | 4 | 5

// Try to modify the expression so that we get a range from 1 to 6
let randomNumber4 = Math.floor( Math.random() * 6 ) + 1

console.log(randomNumber4)
//  1 | 2 | 3 | 4 | 5 | 6 

//LOGICAL OPERATIONS


//LOGICAL AND - &&
//both the conditions defined on the LHS and RHS must be true;

//Used in places where both of the conditions must be met

let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}

//Shortcut 
if (hasCompletedCourse && givesCertificate) {
    generateCertificate()
}

//for true no need to mention === true;

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

let hasSolvedChallenge = false
let hasHintsLeft = false

if(hasSolvedChallenge === false && hasHintsLeft===false){
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}


//LOGICAL OR ||
// Any condition on RHS or LHS true is true it runs

//Used in places where any of the conditions must be met

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}


//OBJECTS
// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

//For accessing these key value pairs (.) operator used

console.log( course.length )
//63

console.log( course.tags )
//["html", "css"]

//METHODS
//Functions defined inside objects are known as methods

let player = {
    name: "Shashank",
    chips: 200,
    sayHello: function() {
        console.log("Let's win this thing")
    }
}

//for calling method
player.sayHello()