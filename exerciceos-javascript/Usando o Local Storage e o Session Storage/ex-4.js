function salvarUltimaOperacao() {
  const ultimaOp = {
    valorAnterior,
    operador,
    valorAtual
  };

  sessionStorage.setItem("ultimaOperacao", JSON.stringify(ultimaOp));
}

salvarUltimaOperacao();

function carregarUltimaOperacao() {
  const dados = sessionStorage.getItem("ultimaOperacao");

  if (!dados) return;

  const op = JSON.parse(dados);

  valorAnterior = op.valorAnterior;
  operador = op.operador;
  valorAtual = op.valorAtual;

  atualizarDisplay();
}


function salvarConfiguracoes() {
  const config = {
    tema: "dark", // exemplo
    ultimaTela: valorAtual
  };

  localStorage.setItem("configUsuario", JSON.stringify(config));
}


function carregarConfiguracoes() {
  const dados = localStorage.getItem("configUsuario");

  if (!dados) return;

  const config = JSON.parse(dados);

  valorAtual = config.ultimaTela || "0";

  // exemplo de tema
  if (config.tema === "dark") {
    document.body.style.background = "#111";
    document.body.style.color = "#fff";
  }

  atualizarDisplay();
}


window.addEventListener("load", () => {
  carregarConfiguracoes();   // permanente
  carregarUltimaOperacao();  // temporário
});


