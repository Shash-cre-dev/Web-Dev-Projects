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