const mensagem3 = document.querySelector("mensagem3");
const botao3 = document.querySelector("btn");

function esperar(texto, tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      mensagem3.textContent = texto;
      resolve();
    }, tempo);
  });
}

async function iniciarSequencia() {

  await esperar("Primeira mensagem...", 2000);
  await esperar("Segunda mensagem...", 2000);
  await esperar("Terceira mensagem...", 2000);
  await esperar("Processo finalizado!", 2000);

}

botao.addEventListener("click", iniciarSequencia);