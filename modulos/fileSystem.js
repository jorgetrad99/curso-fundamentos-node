const fs = require('fs');

leer = (ruta, callback) => {
  fs.readFile(ruta, (error, data) => {
    /* console.log(data.toString()); */
    callback(data.toString());
  });
};

escribir = (ruta, contenido, callback) => {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      console.log('No he podido escribirlo', error);
    } else {
      console.log('Se ha escrito correctamente');
    }
  });
};

borrar = (ruta, callback) => {
  fs.unlink(ruta, callback);
};

/* leer(__dirname + '/archivo.txt', console.log); */
/* escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log); */
borrar(__dirname + '/archivo1.txt', console.log);
