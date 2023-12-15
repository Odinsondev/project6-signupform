
const password1 = document.getElementById('pwd');
const password2 = document.getElementById('pwd2');
const error = document.getElementById('error');

password1.addEventListener('input', runPasswordCheck);
password2.addEventListener('input', runPasswordCheck);

function runPasswordCheck() {
  if (password1.value !== password2.value) {
    password1.setCustomValidity("Passwords do not match");
    password2.setCustomValidity("Passwords do not match");
    error.textContent = "* Passwords do not match";
  } else if (password1.value === password2.value) {
    password1.setCustomValidity("");
    password2.setCustomValidity("");
    error.textContent = "";
  }
}
