const numeros = [1, 2, 3, 4, 2, 5, 3, 6];
let duplicados = [];

for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] === numeros[j]) {
      if (!duplicados.includes(numeros[i])) {
        duplicados.push(numeros[i]);
      }
    }
  }
}

console.log("Elementos duplicados:", duplicados);