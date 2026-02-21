// ❌ Código com repetição (antes da refatoração)

const cachorro = {
  nome: "Rex",
  falar() {
    return this.nome + " fez barulho.";
  }
};

const gato = {
  nome: "Mimi",
  falar() {
    return this.nome + " fez barulho.";
  }
};

const papagaio = {
  nome: "Loro",
  falar() {
    return this.nome + " fez barulho.";
  }
};


// ✅ Refatoração usando herança prototípica

// Objeto base com comportamento compartilhado
const animal = {
  falar() {
    return this.nome + " fez barulho.";
  }
};

// Objetos herdando do protótipo
const cachorroRef = Object.create(animal);
cachorroRef.nome = "Rex";

const gatoRef = Object.create(animal);
gatoRef.nome = "Mimi";

const papagaioRef = Object.create(animal);
papagaioRef.nome = "Loro";


// Testando
console.log(cachorroRef.falar());
console.log(gatoRef.falar());
console.log(papagaioRef.falar());