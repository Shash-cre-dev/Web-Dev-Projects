document.getElementById("count").innerHTML = 15;

// getElementById selects the element with that particular Id name
//.innerHTML changes its content

// We have to first store the count of the variable, before showing it

// To store the count we will use a variable

let count2 = 0 ;

console.log(count2);
//console provided by the browser and press F12, the console will open,
//console is used by developers to debug JS code

//always first initiliaze the variable before logging out be prevent Reference Error
console.log(myAge);
let myAge = 0 ;

//Here Reference Error

let firstBatch = 15;
let secondBatch = 45;

let totalCount = firstBatch + secondBatch
console.log(totalCount);


//Reassigning can be done in JS
let count1 = 5

// count + 1
count1 = 3

count1 = 1

console.log(count1)

//New value of Count = 1

//INCREMENTING AND REASSIGNING

count1 = count1 + 1;
console.log(count1)


//Functions are also known as commands in JS

function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

// Setting up the the race 🏎 🏎 🏎

countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown()


//1) intialize the count as 0
// let count = 0 ;

//2) listen for clicks on the increment button

// Inside the HTML where INCREMENT button present
//<button id="increment-btn" onclick="increment()">INCREMENT</button>

//onclick used as event listener and it runs the increment() when INCREMENT button is clicked.


//3) increment the count variable when the button is clicked
// function increment(){
//     count = count+1;
//     console.log(count);
// }


//4) change the count-el in the HTML to reflect the new count

// let countEl = document.getElementById("count-el");
// console.log(countEl);

//<h2 id="count-el"></h2>
//return the corresponding HTML element

//Final Solution
let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count = count + 1;
    countEl.innerText = count;
}

//DOM
//Document Object Model
//aka how you use JavaScript to modify a Website

//document - is the HTML page
//object - document = { }
//model - representation of HTML elements

//HTML element
//<h2 id="count-el">0</h2>

//Model
let countEl2 = document.getElementById("count-el");

//String

// "anything here" or 'anything here' - is string

// " anything here ' or ' anything here " - not a string

let username = "per"
console.log(username)

let message = "You have three new notifications"
console.log(message)

//Concatenate

console.log(message + "," + username + "!")

// Create a variable, messageToUser, that contains the message we have logged
messageToUser = "per, you have three new notifications!";
console.log(messageToUser);


//STRING VS NUMBERS
//string always wins

let Name = 42
let greeting = "Hi, my name is "
let myGreeting = greeting + Name
console.log(myGreeting)

//42 is converted to a string

let points = 4
let bonusPoints = "10"
let totalPoints = points + bonusPoints
console.log(totalPoints)

//-o "410"


