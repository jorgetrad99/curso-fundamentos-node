console.time('todo');

let suma = 0;

console.time('bucle');
for (let i = 0; i < 1_000_000_000; i++) {
  suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;

console.time('bucle2');
for (let j = 0; j < 1_000_000_000; j++) {
  suma += 1;
}
console.timeEnd('bucle2');

console.time('asincrono');
console.log('Empieza el proceso asíncrono');
asincrona().then(() => {
  console.timeEnd('asincrono');
});

console.timeEnd('todo');

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Termina el proceso asíncrono');
      resolve();
    });
  });
}
