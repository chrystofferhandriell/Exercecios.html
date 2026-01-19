const readline = require("readline-sync");

let numero;

do {
  numero = readline.questionInt("Digite um numero entre 1 e 10: ");
} while (numero < 1 || numero > 10);

console.log("Numero correto! Você digitou:", numero);