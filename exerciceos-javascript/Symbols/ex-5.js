// criando um Symbol para o método
const metodoSecreto = Symbol("metodoSecreto");

const usuario = {
  nome: "João",

  // método "normal"
  falar() {
    console.log("Olá!");
  },

  // método com Symbol
  [metodoSecreto]() {
    console.log("Método secreto executado 🤫");
  }
};

// métodos normais
usuario.falar();

// tentando acessar o método Symbol de forma comum
console.log(usuario.metodoSecreto); // undefined

// acesso correto
usuario[metodoSecreto]();