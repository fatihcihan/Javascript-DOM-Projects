const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'an incorrect e-mail address')
    }

}

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required`)
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} must be at least ${min} chracters`);
    } else if (input.value.length > max) {
        error(input, `${input.id} must be a maximum of ${max} chracters`);
    } else {
        success(input);
    }
}

function checkPasswords(inputPassword, inputRepassword) {
    if (inputPassword.value !== inputRepassword.value) {
        error(inputPassword, 'passwords do not match')
    }
}

function checkPhone(input) {
    var exp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!exp.test(input.value)) {
        error(input, 'phone must have 10 characters');
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkRequired([username, email, password, repassword, phone]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 12);
    checkLength(repassword, 7, 12);
    checkPasswords(password, repassword);
    checkPhone(phone);
})