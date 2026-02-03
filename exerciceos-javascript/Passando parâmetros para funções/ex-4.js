
function alterarValores(a, b) {
  a = 50;
  b.prop = 'novo';
}
 
let x = 10;
let y = { prop: 'original' };
alterarValores(x, y);
console.log(x, y.prop); // O que será impresso?

