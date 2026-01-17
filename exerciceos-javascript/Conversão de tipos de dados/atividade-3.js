let texto = "false";

let valorBooleano = texto === "true";

console.log(valorBooleano); // false


/* ou */


function stringParaBoolean(valor) {
  return valor === "true";
}

console.log(stringParaBoolean("false")); // false
console.log(stringParaBoolean("true"));  // true