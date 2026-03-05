const mensagem2 = document.querySelector("mensagem2");
const botao2 = document.querySelector("btn");

function atualizarTexto(texto, tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      mensagem2.textContent = texto;
      resolve();
    }, tempo);
  });
}

function iniciarSequencia() {
  atualizarTexto("Primeira mensagem...", 2000)
    .then(() => atualizarTexto("Segunda mensagem...", 2000))
    .then(() => atualizarTexto("Terceira mensagem...", 2000))
    .then(() => atualizarTexto("Processo finalizado!", 2000));
}

botao.addEventListener("click", iniciarSequencia);