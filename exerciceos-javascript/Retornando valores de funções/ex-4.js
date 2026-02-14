function somarArray(numeros) {
  let soma = 0;

  for (let numero of numeros) {
    soma += numero;
  }

  return soma;
}
// Teste
console.log(somarArray([50, 25,24])); // 99