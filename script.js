console.log("script.js is succesfully linked");

let totalMonthly = 0
let deleteButtonButton = document.createElement("deleteButton");

function submitButton(event) {
    console.log("we're clicking the submit button!");

    const submitFirstName = document.getElementById("firstNameInput")
    console.log("submitFirstName:", submitFirstName);
    const submitLastName = document.getElementById("lastNameInput")
    console.log("submitLastName:", submitLastName);
    const submitIdNumber = document.getElementById("idNumber")
    console.log("idNumber:", submitIdNumber);
    const submitJobTitle = document.getElementById("jobTitle")
    console.log("jobTitle:", submitJobTitle);
    const submitAnnualSalaryInput = document.getElementById("annualSalaryInput")
    console.log("annualSalaryInput:", submitAnnualSalaryInput);

    const firstNameValue = firstNameInput.value
    console.log("firstNameValue", firstNameValue);
    const lastNameValue = lastNameInput.value
    console.log("lastNameValue", lastNameValue);
    const idInputValue = idInput.value
    console.log("idInputValue", idInputValue);
    const titleInputtValue = titleInput.value
    console.log("titleInputtValue", titleInputtValue);
    const annualSalaryInputValue = annualSalaryInput.value
    console.log("annualSalaryInputValue", annualSalaryInputValue);

    const affTable = document.querySelector("#tableData tbody");
    affTable.innerHTML += "<tr><td>" + firstNameInput.value + "</td><td>" + lastNameInput.value + "</td><td>" + idInput.value + "</td><td>" + titleInput.value + "</td><td>" + annualSalaryInput.value + "</td></tr>"
    event.preventDefault();



    totalMonthly += Number(annualSalaryInput.value)
    const divideBy = 12;
    let monthlySalaryExpense = totalMonthly / divideBy;

    let assignTotal = document.getElementById("totalMonthly");
    assignTotal.innerText = monthlySalaryExpense;
    if (monthlySalaryExpense > 20000) {
        let overBudget = document.getElementById('overBudget')
        overBudget.innerText = "| OVER BUDGET!"
    }

submitButton.reset();


    event.preventDefault()
}


let deleteButton = document.createElement("button");
deleteButtonButton.innerText = "Delete";
deleteButtonButton.append(deleteButton);
deleteButtonButton.setAttribute("onclick", "deleteInfo(event)");

function deleteInfo(event) {
    // Console log to find path to correct node of entire row data
    console.log("test", event.target.parentNode.parentNode);

    event.target.parentNode.parentNode.remove();

    event.preventDefault();
}

