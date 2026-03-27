const post = {
  titulo: "Meu Primeiro Post",
  conteudo: "Este é o conteúdo do meu primeiro post."
};

const template = `
  <div class="post">
    <h2>${post.titulo}</h2>
    <p>${post.conteudo}</p>
  </div>
`;

console.log(template);