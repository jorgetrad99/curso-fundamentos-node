/* function soyAsincrona(miCallback) {
  console.log('Hola, soy una función asíncrona');
  setTimeout(() => {
    console.log('Estoy siendo asíncrona');
    miCallback();
  }, 1000);
}

console.log('Iniciando proceso...');
soyAsincrona(() => {
  console.log('Terminando proceso...');
}); */

function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios, ' + nombre);
    otroCallback();
  }, 1000);
}

console.log('Iniciando proceso...');
hola('Jorge', (nombre) => {
  adios(nombre, () => {
    console.log('Terminando proceso...');
  });
});
