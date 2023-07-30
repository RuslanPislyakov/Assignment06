// HANDLE THE LOAD EVENT OF THE WINDOW
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
// CLOSE THE POPUP
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
let id = null
let fullName = null
let ext = null
let email = null
let department = null

let $ = (id) => document.getElementById(id)

let cancel = $('cancel')
cancel.addEventListener('click', () => {
    
    window.close()
})

document.getElementById("empForm").addEventListener("submit", (event) => {
                
    event.preventDefault();

    id         = $('id').value
    fullName   = $('name').value
    ext        = $('extension').value
    email      = $('email').value
    department = $('department').value

    window.close()

    let parentoutput = window.opener.document.getElementById('loginDetails');
    parentoutput.innerHTML = `ID: ${id}<br>Name: ${fullName}<br>Extension: ${ext}<br>Email: ${email}<br>Department: ${department}`

})