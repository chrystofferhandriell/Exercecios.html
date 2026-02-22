// Array de números
const numeros = [10, 5, -3, 8, 20];

// Usando some() para verificar se existe número negativo
const existeNegativo = numeros.some(numero => numero < 0);

console.log(existeNegativo); // true