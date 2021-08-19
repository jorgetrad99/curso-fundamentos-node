//const process = require('process');

process.on('beforeExit', () => {
  console.log('El proceso está por terminar');
});

process.on('exit', () => {
  //aquí ya no trabaja el EventLoop
  console.log('El proceso acabó');
  setTimeout(() => {
    console.log('Esto no se verá nunca');
  }, 0);
});

setTimeout(() => {
  console.log('Esto se va a ver');
}, 0);

process.on('uncaughtException', (error, origin) => {
  console.error('Vaya, se nos olvidó capturar un error');
  console.error(error.message);
  setTimeout(() => {
    console.log('Esto viene de las excepciones');
  }, 0);
});

process.on('uncaughtrejection', () => {}); //Para promesas que se han rechzado

functionQueNoExiste();

console.log('Esto si el error no se captura, no se imprime');
