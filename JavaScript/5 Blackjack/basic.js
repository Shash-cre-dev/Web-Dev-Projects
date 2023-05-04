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
