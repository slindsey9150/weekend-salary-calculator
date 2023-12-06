console.log("script.js is succesfully linked");
// ! commented out code is code prior to changing after live solve
let totalMonthly = 0
function submitButton(event){
    console.log("we're clicking the submit button!");
// function submitButton(event) {
//     console.log("we're clicking the submit button!");

//     const submitFirstName = document.getElementById("firstNameInput")
//     console.log("submitFirstName:", submitFirstName);
//     const submitLastName = document.getElementById("lastNameInput")
//     console.log("submitLastName:", submitLastName);
//     const submitIdNumber = document.getElementById("idNumber")
//     console.log("idNumber:", submitIdNumber);
//     const submitJobTitle = document.getElementById("jobTitle")
//     console.log("jobTitle:", submitJobTitle);
//     const submitAnnualSalaryInput = document.getElementById("annualSalaryInput")
//     console.log("annualSalaryInput:", submitAnnualSalaryInput);

//     const firstNameValue = firstNameInput.value
//     console.log("firstNameValue", firstNameValue);
//     const lastNameValue = lastNameInput.value
//     console.log("lastNameValue", lastNameValue);
//     const idInputValue = idInput.value
//     console.log("idInputValue", idInputValue);
//     const titleInputtValue = titleInput.value
//     console.log("titleInputtValue", titleInputtValue);
//     const annualSalaryInputValue = annualSalaryInput.value
//     console.log("annualSalaryInputValue", annualSalaryInputValue);
const fName = document.getElementById("firstNameInput").value
    const lName = document.getElementById("lastNameInput").value
    const id = document.getElementById("idInput").value
    const jobTitle = document.getElementById("titleInput").value
    const annualSalary = document.getElementById("annualSalaryInput").value
//     `
const employeeData = document.getElementById("employeeData")

whereRowsGo.innerHTML += `
    <tr>
        <td>${fName}</td>
        <td>${lName}</td>
        <td>#${id}</td>
        <td>${jobTitle}</td>
        <td>$${annualSalary}</td>
        <td><button onClick="deleteInfo(event)">DELETE</button></td>
    </tr>
    `
//     const affTable = document.querySelector("#tableData tbody");
//     affTable.innerHTML += "<tr><td>" + firstNameInput.value + "</td><td>" + lastNameInput.value + "</td><td>" + idInput.value + "</td><td>" + titleInput.value + "</td><td>" + annualSalaryInput.value + "</td></tr>"
//     event.preventDefault();


// ! this part worked fine before the live solve so I never changed it
    totalMonthly += Number(annualSalary)
    const divideBy = 12;
    let monthlySalaryExpense = totalMonthly / divideBy;

    let assignTotal = document.getElementById("totalMonthly");
    assignTotal.innerText = monthlySalaryExpense;
    if (monthlySalaryExpense > 20000) {
        let overBudget = document.getElementById('overBudget')
        overBudget.innerText = " OVER BUDGET!"
    }

//     event.preventDefault()


// }



// ! tried using form reset function but never got it to work because my inputs were not in a form
document.getElementById("firstNameInput").value = ''
document.getElementById("lastNameInput").value = ''
document.getElementById("idInput").value = ''
document.getElementById("titleInput").value = ''
document.getElementById("annualSalaryInput").value = ''
}


let deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
document.body(deleteButton);
deleteButton.setAttribute("onclick", "deleteInfo(event)");

function deleteInfo(event) {
    // Console log to find path to correct node of entire row data
    console.log("test", event.target.parentNode.parentNode);
    event.target.parentNode.parentNode.remove();
    event.preventDefault();
}
// ! I was at one point able to get the total monthly to update when a row was removed, but I'm not sure how.


// ! how key did it
// function deleteInfo(event) {
//     event.target.closest('tr').remove()
// }
