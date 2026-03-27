class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  acelerar() {
    console.log(`${this.marca} ${this.modelo} está acelerando 🚀`);
  }

  frear() {
    console.log(`${this.marca} ${this.modelo} está freando 🛑`);
  }
}

class CarroEletrico extends Carro {
  constructor(marca, modelo, ano, autonomia) {
    super(marca, modelo, ano); // chama o constructor da classe pai
    this.autonomia = autonomia; // nova propriedade
  }

  mostrarAutonomia() {
    console.log(`Autonomia: ${this.autonomia} km 🔋`);
  }
}

const tesla = new CarroEletrico("Tesla", "Model 3", 2023, 500);

console.log(tesla.marca);       // Tesla
console.log(tesla.modelo);      // Model 3
console.log(tesla.ano);         // 2023
console.log(tesla.autonomia);   // 500

tesla.acelerar();        // herdado
tesla.frear();           // herdado
tesla.mostrarAutonomia(); // próprio