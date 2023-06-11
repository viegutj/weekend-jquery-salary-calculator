// Assignment Instructions
/* The application should have an input form that collects 
_employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, 
store the information to calculate monthly costs, 
append information to the DOM and clear the input fields. 
Using the stored information, calculate monthly costs and append 
this to the to DOM. If the total monthly cost exceeds $20,000, 
add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. 
For Base mode, it does **not** need to remove that Employee's 
salary from the reported total. */
// End of Base Mode Instructions

console.log('Hello js!');

//ready my jQuery file
$(document).ready(onReady);

function onReady() {
    console.log('Hey jQuery!');
    
    // Event Listeners
    $('#submit-button').on('click', handleSubmitButton)
    $('#table-input').on('click', '.delete-button', handleDeleteButton)
}

// Global Variable Declaration
let submitCounter = 0
let employeeArray = []
let monthlyTotal = 0
let annualSalaryInputVal = 0

//Event Handlers
function handleSubmitButton(event) {
    event.preventDefault()
    console.log('Submit button clicked!');
    console.log('submitCounter', submitCounter++);

// Here we are collecting the user inputs to the form,
// and storing those into our local variables.
// console.log is written for each grab to test.
    // grab input value for First Name
    let firstNameInputVal = $('#first-name-input').val()
    console.log('first name input is:', firstNameInputVal)
    // grab input value for Last Name
    let lastNameInputVal = $('#last-name-input').val()
    console.log('last name input is:', lastNameInputVal)
    // grab input value for id
    let idInputVal = parseInt($('#id-input').val(), 10)
    console.log('id input is:', idInputVal)
    // grab input value for title
    let titleInputVal = $('#title-input').val()
    console.log('title input is:', titleInputVal)
    // grab input value for annual salary
    let annualSalaryInputVal = parseInt($('#annual-salary-input').val(), 10)
    console.log('annual salary input is:', annualSalaryInputVal)

// We need to store these variables for later. How can we organize these?
// We can organize these as objects with multiple properties.
let objectEmployee = {
    firstName: firstNameInputVal,
    lastName: lastNameInputVal,
    id: idInputVal,
    title: titleInputVal,
    salary: annualSalaryInputVal
}

employeeArray.push(objectEmployee);
console.log('All objects in employeeArray', employeeArray);


// Here we are appending data into our table.
// "Hey jQuery, access id table-input and append these
// variables, as well as a delete button"
    $('#table-input').append(`
        <tr>
            <td>${firstNameInputVal}</td>
            <td>${lastNameInputVal}</td>
            <td>${idInputVal}</td>
            <td>${titleInputVal}</td>
            <td>${annualSalaryInputVal}</td>
            <td><button class="delete-button">Delete</button></td> 
        </tr>
    `);

// Task: Using the stored information, 
// calculate monthly costs and append this to the to DOM. 

// Take the salaryInputVal and add it to our monthlyTotal
// Global variable of monthlyTotal will store total after each user action.
monthlyTotal += annualSalaryInputVal; 

console.log('monthlyTotal:', monthlyTotal);

// Clear the text and replace with a string of the monthlyTotal.
$('#monthly-total').text('').append(monthlyTotal);

// If the total monthly cost exceeds $20,000, 
// add a red background color to the total monthly cost.

if (monthlyTotal > 20000) {
    $('#monthly-total').css('background-color', 'red');
    console.log('we are inTheRed');
}

// Resetting all of our table inputs (<td>) to empty values.
        $('#first-name-input').val('')
        $('#last-name-input').val('')
        $('#id-input').val('')
        $('#title-input').val('')
        $('#annual-salary-input').val('')
}

/* Create a delete button that removes an employee from the DOM. 
For Base mode, it does **not** need to remove that Employee's 
salary from the reported total. */
// Event handler for delete button
function handleDeleteButton() {
    console.log('deleteButton has been clicked!');
    // hey jQuery, access "this", and delete its parent
    $(this).parent().parent().remove()
    // remove the 
}