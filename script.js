const inputs = document.getElementsByTagName('input');
const submtBtn = document.querySelector('button');
let firstPass = document.getElementById('password');
let secondPass = document.getElementById('confirm-password');

// Set all input's indeterminate to true
for (let i = 0; i < inputs.length; i++) {
    inputs[i].indeterminate = true;
}

submtBtn.addEventListener('click', () => validatePasswords());

function validatePasswords() {
    return;
}