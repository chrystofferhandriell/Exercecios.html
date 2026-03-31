// <button id="clearHistory">Limpar Histórico</button>




// função para limpar histórico
function limparHistorico() {
  historicoOperacoes = []; // limpa array
  localStorage.removeItem("historicoCalculadora"); // remove do storage

  // limpa da tela (se tiver lista)
  const lista = document.getElementById("history-list");
  if (lista) {
    lista.innerHTML = "";
  }
}

// evento do botão
document.getElementById("clearHistory").addEventListener("click", limparHistorico);