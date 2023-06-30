let form = document.getElementById("form")
let fullName = document.querySelector('#name')
let myEmail = document.querySelector('#email')
let myEmailConfirm = document.querySelector('#confirm-email')
let btn = document.querySelector('#btn')
// let validate = document.querySelectorAll('.inputs')

form.addEventListener("submit", function(e) {
    e.preventDefault()
    setValidator()
})

function setValidator() {
    const nameVal = fullName.value.trim()
    const emailVal = myEmail.value.trim()
    const conEmailVal = myEmailConfirm.value.trim()

    // validation for full name
    if(nameVal === "") {
        // show error
        setError(fullName, 'full name cannot be empty')
    }else {
        // show success
        setSuccess(fullName)
    }

    // validation for email
    if(emailVal === "") {
        // show error
        setError(myEmail, 'email cannot be empty')
    }else {
        // show success
        setSuccess(myEmail)
    }

    // validation for confirming email
    if(myEmailConfirm === "") {
        // show error
        setError(myEmailConfirm, 'this field cannot be empty')
    }else if(myEmailConfirm !== myEmail) {
        // showing error if the email does not match
        setError(myEmailConfirm, 'this email has to match with the above one')
    }else {
        // show success
        setSuccess(myEmailConfirm)
    }
}

function setError(input, message) {
    const validate = input.parentElement
    const theMessage = validate.querySelector('.validate')

    // adding the desired message
    theMessage.innerText = message

    // adding the class name
    validate.className = "inputs deny"
}

function setSuccess(input) {
    const validate = input.parentElement

    // adding the class name
    validate.className = "inputs checked"
}