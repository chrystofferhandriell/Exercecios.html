function salvarHistorico() {
  localStorage.setItem("historicoCalculadora", JSON.stringify(historicoOperacoes));
}