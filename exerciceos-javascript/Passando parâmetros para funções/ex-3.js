const usuario = {
  nome: "Ana",
  idade: 20,
  cidade: "São Paulo"
};

function atualizarUsuario(obj) {
  const { nome, idade, cidade } = obj;

  return {
    nome,
    idade: idade + 1,        // propriedade modificada
    cidade: cidade.toUpperCase() // propriedade modificada
  };
}

const novoUsuario = atualizarUsuario(usuario);

console.log("Original:", usuario);
console.log("Novo:", novoUsuario);