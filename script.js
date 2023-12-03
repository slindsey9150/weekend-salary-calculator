console.log("script.js is succesfully linked");

function submitButton() {
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

}