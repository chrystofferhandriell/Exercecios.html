// criando um Symbol
const id = Symbol("id");

// criando um objeto
const usuario = {
  nome: "João",
  idade: 30
};

// adicionando o Symbol como propriedade
usuario[id] = 12345;

// acessando a propriedade
console.log(usuario[id]);