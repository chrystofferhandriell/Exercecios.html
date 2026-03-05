const botao = document.querySelector("#buscarDados");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", buscarDados);

async function buscarDados() {

  const url = "https://jsonplaceholder.typicode.com/naoexiste";

  try {

    const resposta = await fetch(url);

    if (resposta.status === 200) {
      const dados = await resposta.json();
      resultado.textContent = "✅ Requisição realizada com sucesso!";
      console.log(dados);
    }

    else if (resposta.status === 404) {
      resultado.textContent = "❌ Página não encontrada (Erro 404)";
    }

    else if (resposta.status === 400) {
      resultado.textContent = "⚠️ Requisição inválida (Erro 400)";
    }

    else if (resposta.status === 500) {
      resultado.textContent = "🚨 Erro interno do servidor (Erro 500)";
    }

    else {
      resultado.textContent = "Erro desconhecido.";
    }

  } catch (erro) {

    resultado.textContent = "Erro de conexão. Verifique sua internet.";
    console.log("Erro:", erro);

  }

}