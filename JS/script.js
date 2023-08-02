//bloco de validaçao de email
let validEmailR = false;

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("input", validateEmail);
});
const emailInput = document.getElementById("email"); // Declare emailInput no escopo global

function validateEmail() {
  const emailError = document.getElementById("emailL");
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    emailError.textContent = "|Email inválido|";
    emailError.style.color = "red";
    validEmailR = false;
  } else {
    emailError.textContent = "Email:";
    emailError.style.color = "black";
    validEmailR = true;
  }
}
//bloco de validaçao de email

//Bloco de validaçao da senha do usuario!
let validPasswordR = false;
let currentPassword = "";

const passwordRegister = document.querySelector("#password");
passwordRegister.addEventListener("input", validPassword);
function validPassword() {
  let passwordLimit = document.querySelector("#password").value;
  let passwordError = document.querySelector("#passwordL");

  if (passwordLimit === "" || passwordLimit.length <= 7) {
    passwordError.textContent = "|Sua senha deve conter mais de 8 caracteres|";
    passwordError.style.color = "red";
    validPasswordR = false;
  } else {
    passwordError.textContent = "Password: ";
    validPasswordR = true;
    passwordError.style.color = "black";
    currentPassword = passwordRegister.value;
    console.log(currentPassword);
  }
}
//Bloco de validaçao da senha do usuario!

//Bloco de confirmaçao de senha
let validConfirmPassword = false;

const confirmPassword = document.querySelector("#confirmPassword");
confirmPassword.addEventListener("input", passwordConfirmation);
function passwordConfirmation() {
  let ConfirmError = document.querySelector("#confirmPasswordL");
  if (confirmPassword.value === currentPassword) {
    ConfirmError.textContent = "Confirme sua senha:";
    ConfirmError.style.color = "black";
    console.log(confirmPassword.value);
    validConfirmPassword = true;
  } else {
    ConfirmError.textContent = "|Senha diferente|";
    ConfirmError.style.color = "red";
    validConfirmPassword = false;
  }
}
//Bloco de confirmaçao de senha

//Bloco de validação do nome
let nameValid = false;
const nameValidation = document.querySelector("#fullName");
let nameError = document.querySelector("#nameL");
nameValidation.addEventListener("input", nameValidationR);

function nameValidationR() {
  let regex = /^[a-zA-Z ]+$/;

  if (nameValidation.value === "" || !regex.test(nameValidation.value)) {
    nameError.textContent =
      "|Nome incorreto|\n(não deve conter números ou caracteres)";
    nameError.style.color = "red";
    nameValid = false;
  } else {
    nameError.textContent = "Nome Completo:";
    nameError.style.color = "black";
    nameValid = true;
  }
}
//Bloco de validação do nome

const registerButton = document.querySelector("#registerS");
registerButton.addEventListener("click", registration);
function registration(event) {
  if (
    validEmailR === true &&
    validPasswordR === true &&
    validConfirmPassword === true &&
    nameValid === true
  ) {
    let cadastroUser = JSON.parse(localStorage.getItem("cadastroUser") || "[]");
    cadastroUser.push({
      name: nameValidation.value,
      email: emailInput.value,
      password: passwordRegister.value,
    });
    localStorage.setItem("cadastroUser", JSON.stringify(cadastroUser));
  } else {
    alert("Tente novamente. Preencha todos os campos corretamente.");
  }
}




