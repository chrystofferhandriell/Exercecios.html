function counter() {       
  var count = 0;
  return function() {
    count++;
    return count;
  };
}
 
var myCounter = counter();
console.log(myCounter());

/*O que o código faz?

Ele cria um contador privado usando closure.

🧠 Passo a passo da execução
1️⃣ A função counter() é declarada

Ela possui uma variável interna:

var count = 0;


Essa variável pertence ao escopo da função counter.

2️⃣ Chamamos:
var myCounter = counter();


Quando counter() é executada:

count é criado com valor 0

A função interna é retornada

Essa função é armazenada em myCounter

⚠️ Aqui acontece a mágica da closure.

🔐 O que é Closure aqui?

A função interna:

function() {
  count++;
  return count;
}


Ela continua tendo acesso à variável count, mesmo depois que counter() já terminou a execução.

Isso acontece porque:

Funções em JavaScript lembram do ambiente onde foram criadas.

Isso é Closure.

3️⃣ Executando:
console.log(myCounter());


Agora:

count era 0

Incrementa → 1

Retorna → 1

Saída:
1 */