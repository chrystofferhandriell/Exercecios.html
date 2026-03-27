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

const meuCarro = new Carro("Toyota", "Corolla", 2020);

console.log(meuCarro.marca); // Toyota
console.log(meuCarro.modelo); // Corolla
console.log(meuCarro.ano); // 2020

meuCarro.acelerar();
meuCarro.frear();