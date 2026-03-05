const botao = document.querySelector("#buscarDados");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", buscarDados);

async function buscarDados() {

  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const maxTentativas = 3;

  resultado.textContent = "Carregando dados...";

  try {

    const dados = await fetchComRetry(url, maxTentativas);

    resultado.innerHTML = `
      <h3>${dados.title}</h3>
      <p>${dados.body}</p>
    `;

  } catch (erro) {

    resultado.textContent =
      "⚠️ Não foi possível carregar os dados. Tente novamente mais tarde.";

    // Log detalhado para análise futura
    console.error("Erro na requisição:", {
      mensagem: erro.message,
      horario: new Date().toISOString(),
      url: url
    });

  }
}

async function fetchComRetry(url, tentativas) {

  for (let i = 1; i <= tentativas; i++) {

    try {

      console.log(`Tentativa ${i}`);

      const resposta = await fetch(url);

      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
      }

      return await resposta.json();

    } catch (erro) {

      console.warn(`Tentativa ${i} falhou: ${erro.message}`);

      if (i === tentativas) {
        throw erro;
      }

    }

  }

}