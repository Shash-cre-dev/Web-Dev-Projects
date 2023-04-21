const button = document.querySelector('button')
const body = document.querySelector('body')

const color = ['red', 'green', 'blue', 'purple', 'yellow', 'violet']

body.style.backgroundColor = 'transparent'

button.addEventListener('click', changeBg)

function changeBg(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}

//parseInt - for traversal of array as array locations are integers