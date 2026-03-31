function carregarConfiguracoes() {
  // pega dados do localStorage
  const dados = localStorage.getItem("configUsuario");

  if (!dados) return;

  const config = JSON.parse(dados);

  // aplica configurações
  valorAtual = config.valorAtual || "0";
  operador = config.operador || null;

  // exemplo de tema
  if (config.tema === "dark") {
    document.body.style.background = "#111";
    document.body.style.color = "#fff";
  }

  atualizarDisplay();
}


window.addEventListener("load", carregarConfiguracoes);

function carregarSessao() {
  const dados = sessionStorage.getItem("sessaoCalculadora");

  if (!dados) return;

  const sessao = JSON.parse(dados);

  valorAtual = sessao.valorAtual || valorAtual;

  atualizarDisplay();
}


window.addEventListener("load", () => {
  carregarConfiguracoes(); // permanente
  carregarSessao();        // temporário
});
