function animais (especi, nome, idade) {
      this.especi=especi;
      this.nome=nome;
      this.idade=idade;
}

const animal = new animais ('carnivoro','leiao',20);

animais.prototype.descreva = function() {
    return `uma animal ${this.especi} ${this.nome} ${this.idade}`;
};

console.log(animal.descreva());