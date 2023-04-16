const inputs = document.getElementsByTagName('input');
const submtBtn = document.querySelector('button');
const container = document.getElementById('password-container');
let firstPass = document.getElementById('password');
let secondPass = document.getElementById('confirm-password');

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'password') {
        inputs[i].addEventListener('keyup', () => {
            if ((firstPass.value == secondPass.value) && firstPass.value.length >= 8) {
                container.classList.value = 'valid';
                submtBtn.disabled = false;
                return;
            } else if (firstPass.value != secondPass.value) {
                container.classList.value = 'do-not-match';
                submtBtn.disabled = true;
            } else if (firstPass.value.length < 8) {
                container.classList.value = 'less-than-eight-char';
                submtBtn.disabled = true;
            }
        });
    }
}