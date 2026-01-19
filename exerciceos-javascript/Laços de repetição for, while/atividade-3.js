let numero = 1;

while (numero <= 20) {
  if (numero === 15) {
    break; /* para o laço quando chegar a 15*/
  }

  if (numero % 2 !== 0) {
    console.log(numero);
  }

  numero++;
}