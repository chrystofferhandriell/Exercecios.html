const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 2000);
});

// consumindo a Promise
minhaPromise.then(resultado => {
  console.log(resultado);
});