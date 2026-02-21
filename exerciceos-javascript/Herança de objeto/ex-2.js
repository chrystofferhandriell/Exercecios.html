// Classe pai
class Veiculo {
  constructor(tipo, rodas) {
    this.tipo = tipo;
    this.rodas = rodas;
  }

  ligar() {
    return "O veículo está ligado.";
  }
}

// Classe filha
class Carro extends Veiculo {
  constructor(marca, modelo) {
    super("Terrestre", 4); // chama o construtor da classe pai
    this.marca = marca;
    this.modelo = modelo;
  }
}

const carro = new Carro("Toyota", "Corolla");

console.log(carro.ligar());
console.log(carro.tipo);