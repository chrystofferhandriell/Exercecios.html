// criando um Symbol
const id = Symbol("id");

// criando objeto
const usuario = {
  nome: "João",
  idade: 30,
  [id]: 12345
};

// 🔁 for...in
console.log("for...in:");
for (let chave in usuario) {
  console.log(chave);
}

// 🔑 Object.keys()
console.log("Object.keys():");
console.log(Object.keys(usuario));

// 🔍 Acessando o Symbol
console.log("Symbol:");
console.log(usuario[id]);