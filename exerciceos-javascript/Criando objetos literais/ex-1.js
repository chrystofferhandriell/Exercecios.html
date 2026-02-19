const pessoa = {
  nome: "Ana",
  idade: 22,
  cidade: "Recife",

  apresentar() {
    return `Olá, meu nome é ${this.nome}`;
  },

  aniversario() {
    this.idade++;
  }

};

console.log(pessoa.apresentar());
pessoa.aniversario();
console.log(pessoa.idade);


