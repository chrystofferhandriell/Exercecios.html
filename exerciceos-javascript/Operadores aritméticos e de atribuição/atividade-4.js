/* * tem precedência sobre +

5 * 2 = 10

10 + 10 = 20 */ 
let resultado1 = 10 + 5 * 2;
console.log(resultado1);


/* Parênteses têm maior precedência

10 + 5 = 15

15 * 2 = 30 */
let resultado2 = (10 + 5) * 2;
console.log(resultado2);


/* Múltiplos operadores  

4 / 2 = 2

3 * 2 = 6

20 - 2 + 6 = 24 */
let resultado3 = 20 - 4 / 2 + 3 * 2;
console.log(resultado3);


/* Operadores relacionais e lógicos 

10 > 5 → true

3 < 1 → false

true && false → false

4 === 4 → true

false || true → true */
let resultado4 = 10 > 5 && 3 < 1 || 4 === 4;
console.log(resultado4);


/* Precedência com NOT

!false → true

true && true → true */
let resultado5 = !false && true;
console.log(resultado5);