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

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla Bla Bla Bla Blá...');
    callbackHablar();
  }, 1000);
}

function conversacion(nombre, numero_veces, callback) {
  if (numero_veces > 0) {
    hablar(() => {
      conversacion(nombre, --numero_veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

hola('Jorge', (nombre) => {
  conversacion(nombre, 3, () => {
    console.log('Proceso Terminado...');
  });
});

/* console.log('Iniciando proceso...');
hola('Jorge', (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        hablar(() => {
          hablar(() => {
            adios(nombre, () => {
              console.log('Terminando proceso...');
            });
          });
        });
      });
    });
  });
}); */
