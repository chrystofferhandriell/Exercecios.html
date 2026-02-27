document.querySelector('#clickButton').addEventListener('click', function() {
    alert('voce clicou em min!');
});

const input = document.querySelector('#textInput');
const output = document.querySelector('#output');

input.addEventListener('input', function() {
    output.textContent = input.value;
});

const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

// Criando uma div para mensagens
const mensagem = document.createElement('div');
form.appendChild(mensagem);

form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio automático

  const nome = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (nome === "" || email === "") {
    mensagem.textContent = "❌ Preencha todos os campos.";
    mensagem.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    mensagem.textContent = "❌ Email inválido.";
    mensagem.style.color = "red";
    return;
  }

  mensagem.textContent = "✅ Formulário enviado com sucesso!";
  mensagem.style.color = "green";

  form.reset();
});