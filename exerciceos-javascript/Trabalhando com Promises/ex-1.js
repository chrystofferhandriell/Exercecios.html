//ex-1=========

const mensagem = document.querySelector('#mensagem');
    const botao = document.querySelector('#startButton');

    botao.addEventListener('click', function() {

      const minhaPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
          resolve("✅ Operação concluída com sucesso!");
        }, 3000);

      });

      minhaPromise.then((resultado) => {
        mensagem.textContent = resultado;
      });

    });


