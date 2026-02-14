function criarContador() {
  let valor = 0; // variável privada

  return {
    incrementar() {
      valor++;
    },
    decrementar() {
      valor--;
    },
    obterValor() {
      return valor;
    }
  };
}

const contador = criarContador();

contador.incrementar();
contador.incrementar();

console.log(contador.obterValor()); // 2

contador.decrementar();
console.log(contador.obterValor()); // 1