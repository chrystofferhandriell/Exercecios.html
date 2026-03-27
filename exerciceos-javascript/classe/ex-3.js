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
    super(marca, modelo, ano);
    this.autonomia = autonomia;
    this.carga = 100; // começa com 100%
  }

  mostrarAutonomia() {
    console.log(`Autonomia: ${this.autonomia} km 🔋`);
  }

  carregarBateria(quantidade) {
    this.carga += quantidade;

    if (this.carga > 100) {
      this.carga = 100;
    }

    console.log(`Bateria carregada para ${this.carga}% 🔌`);
  }

  statusBateria() {
    console.log(`Status da bateria: ${this.carga}% 🔋`);
  }
}

const carro = new CarroEletrico("Tesla", "Model 3", 2023, 500);

carro.statusBateria();      // 100%
carro.carregarBateria(20);  // continua 100% (limite)
carro.statusBateria();

carro.carga = 40;           // simulando uso
carro.statusBateria();      // 40%

carro.carregarBateria(30);  // 70%
carro.statusBateria();