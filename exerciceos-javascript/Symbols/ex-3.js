// criando Symbol (chave "privada")
const senha = Symbol("senha");

const usuario = {
  nome: "João",
  idade: 30,
  [senha]: "123456"
};

// acesso normal
console.log(usuario.nome);   // João
console.log(usuario.idade);  // 30

// tentando acessar como propriedade comum
console.log(usuario.senha);  // undefined

// acesso correto (com Symbol)
console.log(usuario[senha]); // 123456