// 1. Create a variable, myAge, and set its value to your age
let myAge = 20;
// 2. Log the myAge variable to the console
console.log(myAge);

// 1. Create two variables, myAge and humanDogRatio
let myAge1 = 20;
let humanDogRatio = 0.7;
// 2. Multiply the two together and store the result in myDogAge 
let myDogAge = myAge1 * humanDogRatio;
// 3. Log myDogAge to the console
console.log(myDogAge);

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
let bonusPoints = 50;
bonusPoints = bonusPoints + 100;
console.log(bonusPoints);
// Decrease it down to 25, and then finally increase it to 70
bonusPoints = bonusPoints - 25;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

// Create a function (you decide the name) that logs out the number 42 to the console

function call42() {
    console.log(42);
}

call42();
// Call/invoke the function

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

console.log(logLapTime())

//lap1, lap2, lap3 have global scope can be accessed bby function
//totalTime has local scope can also be accesed within the function

console.log(totalTime) //outside the function will result in an Refrence error



let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLap(){
    lapsCompleted=lapsCompleted+1;
    console.log(lapsCompleted);
}


console.log(incrementLap());
console.log(incrementLap());
console.log(incrementLap());