const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
var playerChoice
var computerChoice

possibleChoices.forEach(choice => choice.addEventListener('click', (e) =>{
    playerChoice = e.target.id
    //when clicked on button(target) the id will be stired in userChoice
    playerChoiceDisplay.innerHTML = playerChoice
    
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()* possibleChoices.length) + 1//or 3

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    else if(randomNumber === 2){
        computerChoice = 'paper'
    }
    else{
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === playerChoice){
        result = 'ITS A DRAW'
    }
    if(computerChoice === 'rock' && playerChoice === 'paper'){
        result = 'YOU WON'
    }
    if(computerChoice === 'rock' && playerChoice === 'scissors'){
        result = 'YOU LOST'
    }
    if(computerChoice === 'paper' && playerChoice === 'scissors'){
        result = 'YOU WON'
    }
    if(computerChoice === 'paper' && playerChoice === 'rock'){
        result = 'YOU LOST'
    }
    if(computerChoice === 'scissors' && playerChoice === 'rock'){
        result = 'YOU WON'
    }
    if(computerChoice === 'scissors' && playerChoice === 'paper'){
        result = 'YOU LOST'
    }

    resultDisplay.innerHTML = result
}