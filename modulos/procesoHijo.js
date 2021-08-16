const { exec, spawn } = require('child_process'); //const exec = require('child_process').exec;

/* exec('ls -al', (error, stdout, sterr) => {
  if (error) {
    console.error(error);
    return false;
  }
  console.log(stdout);
});

exec('node modulos/console.js', (error, stdout, sterr) => {
  if (error) {
    console.error(error);
    return false;
  }
  console.log(stdout);
}); */

let proceso = spawn('ls', ['-la']);

console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
  console.log('¿El proceso está muerto?');
  console.log(proceso.killed);
  console.log(dato);
  console.log(dato.toString());
});

proceso.on('exit', () => {
  console.log('El proceso terminó');
  console.log(proceso.killed);
});
