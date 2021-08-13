function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios, ' + nombre);
      resolve();
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla Bla Bla Bla Blá...');
      /* resolve(nombre); */
      reject('Hay un error');
    }, 1000);
  });
}

// ---

console.log('Iniciando el proceso...');
hola('Carlos')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log('Terminado el procesos');
  })
  .catch((error) => {
    console.error('Ha habido un error');
    console.error(error);
  });
