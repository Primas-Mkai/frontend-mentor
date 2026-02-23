

const form = document.querySelector("form");
const email = document.getElementById("email");
const button = document.querySelector("button");
const invalidInput = document.querySelector("input:invalid");
const emailError = document.querySelector("span");


button.addEventListener('click', (event) => {
    if(email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError();
        email.classList.add("errorMail");
    }
})

form.addEventListener('submit', (event) => {
    if(!email.validity.valid) {
        showError();
        email.classList.add("errorMail");

        event.preventDefault(); // prevent default
    }
})

function showError() {
    if(email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email";
    } else if(email.validity.typeMismatch) {
        emailError.textContent = "Valid email required";
    }

    emailError.className = "error active";
}


email.addEventListener('focus', (event) => {
    if(email.classList.contains("errorMail")) {
        emailError.textContent = "";
        email.addEventListener('keydown', (event) => {
            if(event.key === 'Backspace' || event.key === 'Delete') {
                email.classList.remove("errorMail");
            }
        });
    }
});
