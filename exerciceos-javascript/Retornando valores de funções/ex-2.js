function verificarmaior(a, b) {
     if (a > b){
        return a
     }
     else if (b > a ){
        return b
     }
     else{
        return "numeros são iguais"
     }
}
console.log(verificarmaior(15, 19));