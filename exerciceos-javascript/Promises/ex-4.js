// 1ª Promise
const p = new Promise((resolve) => {
  resolve(5);
});

// encadeamento
p
  .then(numero => {
    console.log("Valor inicial:", numero);
    return numero + 2; // soma 2
  })
  .then(resultado => {
    console.log("Após somar 2:", resultado);
    return resultado * 3; // multiplica por 3
  })
  .then(final => {
    console.log("Resultado final:", final);
  });