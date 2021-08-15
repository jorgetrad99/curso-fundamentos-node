console.log('Algo');
console.info('Algo innformativo, sin mucha relevancia');

//Estos se muestran de diferente color en la terminal
console.error('Esto es un error');
console.warn('Advertencia');

var tabla = [
  {
    a: 1,
    b: 'z',
  },
  {
    a: 2,
    b: 'g',
  },
];

console.table(tabla);

console.group('Conversación');
console.log('Hola');
console.group('Bla');
console.log('BlaBlaBla');
console.log('BlaBlaBla');
console.log('BlaBlaBla');
console.groupEnd('Bla');
console.log('Adiós');
console.groupEnd('Conversación');

console.log('Otra cosa de otra función');

function1 = () => {
  console.group('función 1');
  console.log('Esto es de la función 1');
  console.log('Esto también');
  console.log('Esto también');
  function2();
  console.log('He vuelto a la función 1');
  console.groupEnd('función 1');
};

function2 = () => {
  console.group('function 2');
  console.log('Ahora estamos en la función 2');
  console.groupEnd('function 2');
};

console.log('Empezamos...');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
