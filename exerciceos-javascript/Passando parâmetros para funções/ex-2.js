function adicionarPropriedade(obj) {
  obj.idade = 25;
  console.log("Dentro da função:", obj);
}

let pessoa = {
  nome: "João"
};

adicionarPropriedade(pessoa);
console.log("Fora da função:", pessoa);

