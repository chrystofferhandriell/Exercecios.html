const caracteres = ["a", "b", "c", "e", "x", "9", "k"];

const vogais = ["a", "e", "i", "o", "u"];

for (let i = 0; i < caracteres.length; i++) {
  const caractere = caracteres[i];

  // Se for um número, encerra o laço

  if (!isNaN(caractere)) {
    console.log("Número encontrado:", caractere);
    break;
  }

  // Se for vogal, pula

  if (vogais.includes(caractere.toLowerCase())) {
    continue;
  }

  // Imprime apenas consoantes

  console.log(caractere);
}