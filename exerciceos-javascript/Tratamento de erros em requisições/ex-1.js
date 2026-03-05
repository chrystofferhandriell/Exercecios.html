const botao = document.querySelector("#buscarClima");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", buscarClima);

function buscarClima() {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Rio%20Quente&appid=SUA_API_KEY&units=metric&lang=pt_br";

    fetch(url)
        .then(resposta => resposta.json())
        .then(dados => {

            resultado.innerHTML = `
                <h3>${dados.name}</h3>
                <p>Temperatura: ${dados.main.temp}°C</p>
                <p>Clima: ${dados.weather[0].description}</p>
            `;

        })
        .catch(erro => {

            resultado.textContent = "⚠️ Não foi possível carregar o clima agora. Tente novamente mais tarde.";
            console.error("Erro:", erro);

        });

}