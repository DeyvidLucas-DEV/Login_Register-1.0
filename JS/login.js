let loginBtn = document.querySelector("#loginS");
loginBtn.addEventListener("click", enter);

function enter(event) {
  event.preventDefault();

  let user = document.querySelector("#emailLogin");
  let password = document.querySelector("#passwordLogin");
  let listaUser = JSON.parse(localStorage.getItem("cadastroUser")) || [];

  console.log(listaUser); 

  let loginValid = listaUser.find((item) => {
    return user.value === item.email && password.value === item.password; 
  });

  if (loginValid) {
    console.log("Login bem-sucedido!");
    console.log(loginValid);
  } else {
    console.log("Credenciais inválidas. Tente novamente.");
  }
}
