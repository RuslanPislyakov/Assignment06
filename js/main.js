let popUpwidth = 600;
let popUpHeight = 650;
let test = 123

// HANDLE THE LOAD EVENT OF THE WINDOW
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
let openFormButton    = document.getElementById('btnAddEmployee')

openFormButton.addEventListener('click', () => {
    
    let newWindow = window.open('add-employee.html','google','width=600,height=600');
 
    newWindow.moveTo(((window.screen.width - popUpwidth) / 2), ((window.screen.height - popUpHeight) / 2))
    newWindow.resizeTo(popUpwidth, popUpHeight)

})

