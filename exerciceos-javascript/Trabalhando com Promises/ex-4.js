const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("btn");

function esperar(texto, tempo) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      let erro = false;

      if (erro) {
        reject("Algo deu errado!");
      } else {
        mensagem.textContent = texto;
        resolve();
      }

    }, tempo);

  });
}

botao.addEventListener("click", function(){

  esperar("Primeira mensagem", 2000)
    .then(() => esperar("Segunda mensagem", 2000))
    .then(() => esperar("Terceira mensagem", 2000))
    .catch((erro) => {
      mensagem.textContent = erro;
    });

});