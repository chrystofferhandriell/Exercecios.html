const calcular = function(a, b, operacao) {
  return operacao(a, b);
}
 
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
 
console.log(calcular(5, 3, subtrair ));