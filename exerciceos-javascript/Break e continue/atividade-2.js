const numeros = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 0) {
    continue; // pula números negativos
  }

  console.log(numeros[i]);
}