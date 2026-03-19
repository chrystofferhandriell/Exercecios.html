//❌ 1. Problema com this usando Arrow Function
const pessoa = {
  nome: "João",

  falar: () => {
    console.log("Olá, meu nome é " + this.nome);
  }
};

pessoa.falar();



//✅ 2. Solução (função normal)
const pesso = {
  nome: "João",

  fala: function() {
    console.log("Olá, meu nome é " + this.nome);
  }
};

pessoa.fala();