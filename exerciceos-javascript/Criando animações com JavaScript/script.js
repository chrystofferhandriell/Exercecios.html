const box = document.getElementById("box");

let x = 100;
let y = 100;

const velocidade = 4;

// controle de teclas pressionadas
const teclas = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

// quando tecla é pressionada
document.addEventListener("keydown", (e) => {
  if (teclas.hasOwnProperty(e.key)) {
    teclas[e.key] = true;
  }
});

// quando solta a tecla
document.addEventListener("keyup", (e) => {
  if (teclas.hasOwnProperty(e.key)) {
    teclas[e.key] = false;
  }
});

// loop de animação
function animar() {

  if (teclas.ArrowRight) x += velocidade;
  if (teclas.ArrowLeft) x -= velocidade;
  if (teclas.ArrowUp) y -= velocidade;
  if (teclas.ArrowDown) y += velocidade;

  // aplica movimento
  box.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animar);
}

// iniciar animação
animar();