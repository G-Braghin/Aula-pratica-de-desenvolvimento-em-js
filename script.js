const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const limpar = document.querySelector("#limpar");

function validarEmail() {
  const valor = email.value.trim();
  const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  email.classList.remove("valido", "invalido");
  mensagem.classList.remove("sucesso", "erro");

  if (valor === "") {
    mensagem.textContent = "Digite um e-mail para começar.";
    return false;
  }

  if (formato.test(valor)) {
    mensagem.textContent = "✓ E-mail com formato válido!";
    mensagem.classList.add("sucesso");
    email.classList.add("valido");
    return true;
  }

  mensagem.textContent = "Use o formato nome@dominio.com, sem espaços.";
  mensagem.classList.add("erro");
  email.classList.add("invalido");
  return false;
}

email.addEventListener("input", validarEmail);

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  validarEmail();
});

limpar.addEventListener("click", function () {
  email.value = "";
  email.classList.remove("valido", "invalido");
  mensagem.classList.remove("sucesso", "erro");
  mensagem.textContent = "O e-mail deve conter um nome, @ e um domínio.";
  email.focus();
});
