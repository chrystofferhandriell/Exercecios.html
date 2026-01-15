function testeHoisting() {
  console.log(escola); // ❌ tentativa de acesso antes da declaração
  let escola = "Escola Central";
}

testeHoisting();