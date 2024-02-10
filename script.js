const nam = document.getElementById("name");
const roll = document.getElementById("roll");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task1 = nam.value.trim();
    const task2 = roll.value.trim();    
    
    if (task1 === "" || task2 === "") {
        alert("Please provide some input value.");
    } else {
        addName(task1);
        addRoll(task2);
        nam.value = "";
        roll.value = "";
    }
});

const list = document.querySelector("ul");

function addName(task1) {
    const name = document.createElement("li");
    name.textContent = task1;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => {
        deleteItem(name);
    });
    name.appendChild(deleteButton);
    list.appendChild(name);

    name.innerHTML = `
    <strong style="color: red;">Name: </strong>${task1}
    <button onclick="deleteItem(this.parentNode)">delete</button><br><br>`;
}

function addRoll(task2) {
    const rollnum = document.createElement("li");
    rollnum.textContent = task2;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => {
        deleteItem(rollnum);
    });
    rollnum.appendChild(deleteButton);
    list.appendChild(rollnum);

    rollnum.innerHTML = `
    <strong style="color: red;">Roll Number: </strong>${task2}
    <button onclick="deleteItem(this.parentNode)">delete</button><br><br>`;
}

function deleteItem(item) {
    item.remove();
}
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultInput = document.getElementById("result");

const addButton = document.getElementById("a");
const minusButton = document.getElementById("s");
const productButton = document.getElementById("m");
const divisionButton = document.getElementById("d");
addButton.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 + num2;
    resultInput.value = result.toString();
});

minusButton.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 - num2;
    resultInput.value = result.toString();
});

productButton.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 * num2;
    resultInput.value = result.toString();
});

divisionButton.addEventListener("click", () => {
        if (num2 !== 0) {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            const result = num1 / num2;
            resultInput.value =  result.toString();
            
        } else {
            resultInput.value = "Cannot divide by zero.";
            return;
        }
    });






