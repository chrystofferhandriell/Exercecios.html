//Exemplo com erro de hoisting

console.log(multiplicar(2, 3));

const multiplicar = function (a, b) {
  return a * b;
};

//corrigindo o erro

const mult = function (a, b) {
  return a * b;
};

console.log(mult(9, 3));