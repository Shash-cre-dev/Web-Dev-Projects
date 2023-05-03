
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment(){

    //updating count = count + 1 to count+=1
    count += 1;
    countEl.textContent = count;
}

function save(){
    let saveCount = count + " - ";
    saveEl.textContent += saveCount;
    countEl.textContent = 0;
    count = 0;   
}

function remove(){
    saveEl.textContent = " ";
    saveEl.textContent = "Previous entires: "
}



// can odify the code for even better with replacing innerText with textContent