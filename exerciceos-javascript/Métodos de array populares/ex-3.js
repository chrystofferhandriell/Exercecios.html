const verificar = ["alua", 1, "luna", 3, "peter", 8];

const todosNumeros = verificar.every(item => typeof item === "number");

console.log(todosNumeros); // false