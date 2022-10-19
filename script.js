//Selectors

const list = document.querySelector("#list");
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const errorMsg = document.querySelector(".alert");

//Global variables

const promptError = "Input must not be empty";
const promptDefault = "";

// Event listeners

addBtn.addEventListener('click', addTask);


// Functions

function addTask(){

    if(input.value.length == 0){
        errorMsg.innerText = promptError;
        return;
    } else {
        errorMsg.innerText = promptDefault;
        const text = input.value;

        const listItem = document.createElement('li');
        list.appendChild(listItem);
        
        const itemText = document.createElement('span');
        listItem.appendChild(itemText);
        itemText.innerText = text;

        const trashcan = document.createElement('span');
        trashcan.innerHTML = '&#x1F5D1';
        listItem.appendChild(trashcan);
    }
    input.value = "";
}

// Helper Functions

