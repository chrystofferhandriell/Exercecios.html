const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (erro, dados) => {
  if (erro) {
    console.error("Erro ao ler o arquivo:", erro.message);
    return; // impede continuação
  }

  console.log("Conteúdo do arquivo:");
  console.log(dados);
});