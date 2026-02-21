// Criando um array
const frutas = ["Maçã", "Banana", "Laranja"];

// .push() → adiciona um item no final
frutas.push("Uva");
console.log(frutas); 
// ["Maçã", "Banana", "Laranja", "Uva"]

// .pop() → remove o último item
frutas.pop();
console.log(frutas); 
// ["Maçã", "Banana", "Laranja"]

// .slice() → cria uma cópia parcial do array (não altera o original)
const algumasFrutas = frutas.slice(0, 2);
console.log(algumasFrutas); 
// ["Maçã", "Banana"]

console.log(frutas); 
// ["Maçã", "Banana", "Laranja"]