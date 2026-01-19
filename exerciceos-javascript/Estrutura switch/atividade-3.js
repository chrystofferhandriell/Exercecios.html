function numeroDoDia(dia) {
  switch (dia.toLowerCase()) {
    case "segunda":
      return 1;
    case "terça":
      return 2;
    case "quarta":
      return 3;
    case "quinta":
      return 4;
    case "sexta":
      return 5;
    case "sábado":
      return 6;
    case "domingo":
      return 7;
    default:
      return "Dia inválido";
  }
}
console.log(numeroDoDia("segunda"));  /*  1 */
console.log(numeroDoDia("Terça"));    /* 2  */
console.log(numeroDoDia("quarta"));  /* 7  */
console.log(numeroDoDia("feriado"));  /* Dia inválido */