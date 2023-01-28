let phoneError = document.getElementById('phone-error')
let nameError = document.getElementById('name-error')
let emailError = document.getElementById('email-error')
let messageError = document.getElementById('message-error')
let submitError = document.getElementById('submit-error')

let rePassError = document.getElementById('conpass-error')
let passError = document.getElementById('pass-error')

let iconShowName = document.getElementById('icon-show-name')
let iconShowPhone = document.getElementById('icon-show-phone')
let iconShowEmail = document.getElementById('icon-show-email')
let iconShowPass = document.getElementById('icon-show-pass')
let iconShowRePass = document.getElementById('icon-show-repass')
let passInput = document.getElementById('password')
let cPassInput = document.getElementById('conpassword')
let names = document.getElementById("contact-name")
let phones = document.getElementById("contact-phone")
let emailes = document.getElementById("contact-email")
    // let iconShowWrongName = document.getElementById('iconWrong-name')

function validateName() {
    let name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = "**Name is required"
        nameError.style.visibility = "visible"
        iconShowName.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    }

    if (!name.match(/^[A-Za-z0-9-_]+$/)) {

        nameError.innerHTML = "** (!$%@&*/<) are not allowed! ** use (.-_)";
        nameError.style.visibility = "visible"
        iconShowName.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    } else {
        iconShowName.innerHTML = ' <i class=" fa fa-check-circle" style="color: green ;"></i>';
        nameError.style.visibility = "hidden"
        return true;
    }
}

function validatePhone() {
    let phone = document.getElementById("contact-phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = "**Phone is required"
        phoneError.style.visibility = "visible"
        iconShowPhone.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    }
    if (!phone.match(/^[0-9]+$/)) {
        phoneError.innerHTML = "**Only digits plase"
        iconShowPhone.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        phoneError.style.visibility = "visible"
        return false;
    }
    if (phone.length >= 12) {
        phoneError.innerHTML = "**Phone no should be 11 digits"
        phoneError.style.visibility = "visible"
        iconShowPhone.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    }
    if (phone.length < 11) {
        phoneError.innerHTML = "**Phone number should be 11 digits"
        iconShowPhone.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        phoneError.style.visibility = "visible"
        return false;
    }

    iconShowPhone.innerHTML = ' <i class=" fa fa-check-circle" style="color: green ;"></i>';
    phoneError.style.visibility = "hidden"
        // phoneError.innerHTML = '<i class=" fa fa-check-circle"></i>';
    return true;
}

// nameError.innerHTML = "Write Full Name";
function validateEmail() {
    let email = document.getElementById("contact-email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*[@][a-zA-Z0-9-]*(\.[a-zA-Z0-9-]{2,4})$/;
    if (email.length == 0) {
        emailError.innerHTML = "**Email is required"
        emailError.style.visibility = "visible"
        iconShowEmail.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    }
    if (email.length > 30) {
        emailError.innerHTML = "**maximum 30 character allow "
        emailError.style.visibility = "visible"
        iconShowEmail.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    }

    if (email.match(validRegex)) {
        iconShowEmail.innerHTML = ' <i class=" fa fa-check-circle" style="color: green ;"></i>';
        emailError.style.visibility = "hidden"
        return true;
    } else {
        emailError.innerHTML = "**Invalid email address!"
        emailError.style.visibility = "visible"
        iconShowEmail.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    }

}


function validatePass() {
    // const passPattern = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passInput.value.length == 0) {
        passError.innerHTML = "**password is required"
        passError.style.visibility = "visible"
        iconShowPass.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    }
    if (passInput.value.length < 6) {
        passError.innerHTML = "**password must be 6 character or more"
        passError.style.visibility = "visible"
        iconShowPass.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    }



    // if (!passInput.value.match(passPattern)) {

    //     passError.innerHTML = "**Input Pasword"
    //     passError.style.visibility = "visible"
    //     iconShowPass.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
    //     return false
    // }
    iconShowPass.innerHTML = ' <i class=" fa fa-check-circle" style="color: green ;"></i>';
    passError.style.visibility = "hidden"
    return true
}

function validateConPass() {

    if (cPassInput.value.length == 0) {
        rePassError.innerHTML = "**EnterSamePassword"
        rePassError.style.visibility = "visible"
        iconShowRePass.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;
    }
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {

        rePassError.innerHTML = "**Password doesn't match"
        rePassError.style.visibility = "visible"
        iconShowRePass.innerHTML = ' <i  class="  fa fa-exclamation-circle" style="color: red ;"></i>';
        return false;

    }
    iconShowRePass.innerHTML = ' <i class=" fa fa-check-circle" style="color: green ;"></i>';
    rePassError.style.visibility = "hidden"
    return true
}

// const form = document.querySelector("form");
// form.addEventListener("submit", e => {
//     e.preventDefault();

//     validateName()
//     validatePhone()
//     validateEmail()
//     validatePass()
//     validateConPass()

//     names.addEventListener("keyup", validateName)
//     phones.addEventListener("keyup", validatePhone)
//     emailes.addEventListener("keyup", validateEmail)
//     passInput.addEventListener("keyup", validatePass)
//     cPassInput.addEventListener("keyup", validateConPass)
//     console.log(validatePhone.value)


// })

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validatePass() || !validateConPass()) {
        submitError.innerHTML = "Please fix Error first "
        return false
    }
}