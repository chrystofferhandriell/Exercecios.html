const botao = document.querySelector("#buscarDados");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", buscarDados);

function buscarDados() {

    const url = "https://jsonplaceholder.typicode.com/naoexiste"; // URL que retorna 404

    fetch(url)
        .then(resposta => {

            if (resposta.status === 200) {
                resultado.textContent = "✅ Requisição realizada com sucesso!";
                return resposta.json();
            }

            if (resposta.status === 404) {
                resultado.textContent = "❌ Página não encontrada (Erro 404).";
                throw new Error("Erro 404");
            }

            if (resposta.status === 400) {
                resultado.textContent = "⚠️ Requisição inválida (Erro 400).";
                throw new Error("Erro 400");
            }

            if (resposta.status === 500) {
                resultado.textContent = "🚨 Erro interno do servidor (Erro 500).";
                throw new Error("Erro 500");
            }

            throw new Error("Erro desconhecido");

        })
        .then(dados => {
            console.log(dados);
        })
        .catch(erro => {
            console.log("Erro capturado:", erro);
        });

}