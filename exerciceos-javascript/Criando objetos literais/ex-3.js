const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

// Função para adicionar propriedade
function adicionarPropriedade(obj, chave, valor) {
  obj[chave] = valor;
}

// Função para modificar propriedade
function modificarPropriedade(obj, chave, novoValor) {
  if (chave in obj) {
    obj[chave] = novoValor;
  } else {
    console.log("Propriedade não existe.");
  }
}

// Função para remover propriedade
function removerPropriedade(obj, chave) {
  if (chave in obj) {
    delete obj[chave];
  } else {
    console.log("Propriedade não existe.");
  }
}

adicionarPropriedade(carro, "cor", "Preto");
console.log(carro);

modificarPropriedade(carro, "ano", 2022);
console.log(carro);

removerPropriedade(carro, "modelo");
console.log(carro);

