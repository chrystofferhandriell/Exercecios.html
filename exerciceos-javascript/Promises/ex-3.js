const p1 = new Promise(resolve => {
  setTimeout(() => resolve("Promise 1 (2s)"), 2000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => resolve("Promise 2 (1s)"), 1000);
});

const p3 = new Promise(resolve => {
  setTimeout(() => resolve("Promise 3 (3s)"), 3000);
});

// Promise.race
Promise.race([p1, p2, p3])
  .then(resultado => {
    console.log("Mais rápida:", resultado);
  });