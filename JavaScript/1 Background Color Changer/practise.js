//REWRITING THE JS CODE

const body = document.querySelector('body')
const button = document.querySelector('button')

let color = ['red', 'blue', 'grey', 'green', 'orange', 'maroon', 'indigo']
button.addEventListener('click', ChangeBg)

function ChangeBg(){
    let colorch = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorch]
}