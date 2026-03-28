const p = new Promise((resolve) => {
  resolve(5);
});

p
  .then(numero => {
    console.log("Valor inicial:", numero);
    return numero + 2;
  })
  .then(resultado => {
    console.log("Após somar 2:", resultado);

    // ❌ erro proposital
    throw new Error("Algo deu errado!");

    return resultado * 3;
  })
  .then(final => {
    console.log("Resultado final:", final);
  })
  .catch(erro => {
    console.log("Erro capturado:", erro.message);
  })
  .finally(() => {
    console.log("Finalizando execução...");
  });