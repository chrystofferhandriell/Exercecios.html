const animais = {

descreva: function () {
   return `aqui esta um ${this.espeçi} um ${this.nome} de ${this.idade} anos  `;
}
};

const animal =Object.create(animais);
animal.espeçi = 'mamifero';
animal.nome= 'lobo';
animal.idade = 10;

console.log(animal.descreva());