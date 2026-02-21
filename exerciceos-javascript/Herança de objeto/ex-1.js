class Veiculo {
  constructor(tipo) {
    this.tipo = tipo;
  }

  ligar() {
    return "Ligado!";
  }
}

class Carro extends Veiculo {
  constructor(marca) {
    super("Terrestre");
    this.marca = marca;
  }
}

const carro = new Carro("Toyota");

// Verificando propriedades próprias
console.log(carro.hasOwnProperty("marca")); // true
console.log(carro.hasOwnProperty("tipo"));  // true
console.log(carro.hasOwnProperty("ligar")); // false

// Verificando existência na cadeia
console.log("ligar" in carro); // true

// Analisando a cadeia de protótipos
let atual = carro;

while (atual !== null) {
  console.log("Objeto:", atual);
  atual = Object.getPrototypeOf(atual);
}