//Selectors

const list = document.querySelector("#list");
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const errorMsg = document.querySelector(".alert");
const stats = document.querySelector(".stats");

//Global variables

let counter = 0;
const promptError = "Input must not be empty";
const promptDefault = "";

// Event listeners

addBtn.addEventListener("click", addTask);
list.addEventListener("click", handleDeleteOrCheck);

// Functions

function addTask() {
  if (input.value.length == 0) {
    errorMsg.innerText = promptError;
    return;
  } else {
    errorMsg.innerText = promptDefault;
    const text = input.value;

    const listItem = document.createElement("li");
    list.appendChild(listItem);

    const itemText = document.createElement("span");
    listItem.appendChild(itemText);
    itemText.innerText = text;

    const trashcan = document.createElement("span");
    trashcan.innerHTML = "&#x1F5D1";
    listItem.appendChild(trashcan);
    trashcan.setAttribute("class", "trashcan");
  }
  input.value = "";
}
function handleDeleteOrCheck(e) {
  if (e.target.getAttribute("class") != "trashcan") {
    toggleDone(e);
  } else {
    deleteTodo(e);
  }
}
// Helper Functions

// Toggles completed class
function toggleDone(e) {
  let item = e.target;
  if (item.getAttribute("class") == "completed") {
    item.setAttribute("class", "uncompleted");
    modifyCounter(0);
    stats.innerText = counter + " completed";
  } else {
    item.setAttribute("class", "completed");
    modifyCounter(1);
    stats.innerText = counter + " completed";
  }
}

// Deletes parent element if trashcan is clicked
function deleteTodo(e) {
  let item = e.target.parentNode;
  if (e.target.getAttribute("class") == "trashcan") {
    item.remove();
  }
}

// Modifies counter depending on input
function modifyCounter(num) {
  if (num == 1) {
    return ++counter;
  } else {
    return --counter;
  }
}
