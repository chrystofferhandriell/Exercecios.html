function salvarSessao() {
  sessionStorage.setItem("sessaoCalculadora", JSON.stringify(historicoOperacoes));
}


historicoOperacoes.push(`${valorAnterior} ${operador} ${valorAtual} = ${resultado}`);
salvarSessao();


function carregarSessao() {
  const dados = sessionStorage.getItem("sessaoCalculadora");

  if (!dados) return;

  historicoOperacoes = JSON.parse(dados);

  // opcional: mostrar no console
  console.log("Sessão recuperada:", historicoOperacoes);
}


window.addEventListener("load", carregarSessao);