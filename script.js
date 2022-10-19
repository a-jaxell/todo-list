//Selectors

const list = document.querySelector("#list");
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const errorMsg = document.querySelector(".alert");

//Global variables

const promptError = "Input must not be empty";
const promptDefault = "";

// Event listeners

addBtn.addEventListener('click', handleClick);


// Functions

function handleClick(){

    if(input.value.length == 0){
        errorMsg.innerText = promptError;
        return;
    } else {
        errorMsg.innerText = promptDefault;
        const text = input.value;

        const item = document.createElement('li');
        list.appendChild(item);
        item.innerText = text;
    }

}

// Helper Functions

