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
list.addEventListener('click', handleDeleteOrCheck);


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
function handleDeleteOrCheck(e){
    // let item = e.target;
    if(e.target.parentNode == list){
        toggleDone(e);
    } else {
        deleteTodo(e);
    }
}


// Helper Functions

// Toggles completed class
function toggleDone(e){
    let item = e.target.parentNode;
    if(item.getAttribute('class') == 'completed'){
        item.setAttribute('class', '');
    } else {
        item.setAttribute('class', 'completed');
    }
}

// Deletes parent element if trashcan is clicked

function deleteTodo(e){
    let item = e.target.parentNode;
    if(e.target.innerHTML == '&#x1F5D1' ){
        item.remove();
    }
}
