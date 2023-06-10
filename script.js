console.log('Hello js!');

//ready my jQuery file
$(document).ready(onReady);

function onReady() {
    console.log('Hey jQuery!');
    
    // Event Listeners
    $('#submit-button').on('click', handleSubmitButton)

}

//Event Handlers
function handleSubmitButton(event) {
    event.preventDefault()
    console.log('Submit button clicked!');

// The application should have an input form 
// that collects _employee first name, last name, 
// ID number, job title, annual salary_.

// A 'Submit' button should collect the form information, 
// store the information to calculate monthly costs, 
// append information to the DOM and clear the input fields.

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
    let idInputVal = $('#id-input').val()
    console.log('id input is:', idInputVal)
    // grab input value for title
    let titleInputVal = $('#title-input').val()
    console.log('title input is:', titleInputVal)
    // grab input value for annual salary
    let annualSalaryInputVal = $('#annual-salary-input').val()
    console.log('annual salary input is:', annualSalaryInputVal)
    
// Here we are appending data into our table.
// Hey jQuery, access id table-input and append these
// variables, as well as a delete button
    $('#table-input').append(`
        <tr>
            <td>${firstNameInputVal}</td>
            <td>${lastNameInputVal}</td>
            <td>${idInputVal}</td>
            <td>${titleInputVal}</td>
            <td>${annualSalaryInputVal}</td>
            <td><button class="delete">Delete</button></td> 
        </tr>
    `);
        $('#affirmation-input').val('')
        $('#author-input').val('')
    
}
