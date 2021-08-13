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
      resolve(nombre);
      /* reject('Hay un error'); */
    }, 1000);
  });
}

async function main() {
  let nombre = await hola('Jorge');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Terminamos el proceso');
}

console.log('Empezamos el proceeso...');
main();
console.log('Va a ser la segunda instrucción que se ejecute');
