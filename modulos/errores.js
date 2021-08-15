otraFuncion = () => {
  seRompe();
};

seRompe = () => {
  return 3 + z;
};

seRompeAsincrona = (callback) => {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error en mi función asíncrona');
      callback(error);
    }
  });
};

try {
  /* otraFuncion(); */
  seRompeAsincrona((error) => {
    console.log('Hay error');
    console.log(error.message);
  });
} catch (error) {
  console.error('Vaya, algo se ha roto...');
  console.error(error.message);
  console.log('Pero no pasa nada, lo hemos capturado');
}

/* seRompe(); */
console.log('Final del programa');
