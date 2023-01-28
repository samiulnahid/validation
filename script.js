let phoneError = document.getElementById('phone-error')
let nameError = document.getElementById('name-error')
let emailError = document.getElementById('email-error')
let messageError = document.getElementById('message-error')
let submitError = document.getElementById('submit-error')
let iconShowRight = document.getElementsByClassName('fa-check-circle')
let iconShowWrong = document.getElementsByClassName('fa-exclamation-circle')
let name = document.getElementById("contact-name").value;
let phone = document.getElementById("contact-phone").value;
let email = document.getElementById("contact-email").value;

const validateForm = formSlector => {
    const formElement = document.querySelector(formSlector);


    const validateSingleFormGroups = formGroup => {
        const label = formGroup.querySelector('lebel')
        const input = formGroup.querySelector('input')
        const errorContainer = formGroup.querySelector('.error')
        const errorIcon = formGroup.querySelector('.fa-exclamation-circle')
        const successIcon = formGroup.querySelector('. fa-check-circle')
    }













    formElement.setAttribute('novalidata', '');
    formElement.addEventListener('submit', event => {
        event.preventDefault();
        validateAllFormGroups(formElement)
    })

    const validateAllFormGroups = formToValidate => {
        const formGroups = Array.from(formToValidate.querySelectorAll('.input-group'))
        formGroups.forEach(formGroup => {
            validateSingleFormGroups(formGroup);
        })
    }
}

validateForm('#registrationForm');