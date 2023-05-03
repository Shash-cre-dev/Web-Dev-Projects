let firstCard = 7;
let SecondCard = 11;
let sum = firstCard + SecondCard;
let hasBlackJack = false;

//For the STATE of the GAME
//JS doesn't keep track of which console was logged out recently
//in order to check for a Blackjack, we will define a boolean variable hasBlackJack = false;
//as initially we don't have a Blackjack.

if(sum<=20){
    console.log("Do you want to draw a New Card? 🙂")
}else if (sum === 21) {
    console.log("Siuuu! You've got Blackjack! 🥳")
    hasBlackJack = true;
} else{
    console.log("You're out of the game! 😭")
}

//CASH OUT
console.log(hasBlackJack);




