// criando Symbol para propriedade "privada"
const _senha = Symbol("senha");

const usuario = {
  nome: "João",
  email: "joao@email.com",
  [_senha]: "123456"
};

// acessos normais
console.log(usuario.nome);   // João
console.log(usuario.email);  // joao@email.com

// tentativa de acesso comum
console.log(usuario.senha);  // undefined

// acesso correto (controlado)
console.log(usuario[_senha]); // 123456