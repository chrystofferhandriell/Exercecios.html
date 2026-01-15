function exemploHoisting() {
  iniciar(); // ✅ chamada antes da declaração

  function iniciar() {
    console.log("Função iniciar executada com sucesso!");
  }
}

exemploHoisting();