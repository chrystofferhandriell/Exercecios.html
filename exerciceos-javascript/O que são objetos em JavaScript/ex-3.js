const pessoa = {
  nome: "Ana",
  idade: 22,
  cidade: "Recife"
};
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}