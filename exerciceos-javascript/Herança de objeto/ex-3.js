const veiculo = {
  tipo: "Terrestre",
  rodas: 4,
  ligar() {
    return "O veículo está ligado.";
  }
};

const carro = Object.create(veiculo);

carro.marca = "Toyota";
carro.modelo = "Corolla";

console.log(carro.marca);     // Própria do objeto → "Toyota"
console.log(carro.tipo);      // Herdada do protótipo → "Terrestre"
console.log(carro.rodas);     // Herdada → 4
console.log(carro.ligar());   // Herdada → "O veículo está ligado."