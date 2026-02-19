
// prevent default
const form = document.getElementById("form");

function handleSubmit(e) {
    e.preventDefault();
}

form.addEventListener('submit', handleSubmit);

const button = document.querySelector("button");
const errorText = document.querySelector("#error");
const inputEmail = document.querySelector("#email");

errorText.classList.add("hide"); 
inputEmail.classList.remove("displayError");

button.addEventListener('click', function(e) {
    errorText.classList.toggle("hide");
    inputEmail.classList.toggle("displayError");
})