const http = require('http');

/*
http
  .createServer((request, response) => {
    console.log('Nueva petición');
    console.log(request.url);

    //Cambiar el HEAD de un request HTTP, cambiamos el código
    //de estado de 200 a 201 y añadimos el que sea texto plano
    //la respuesta
    response.writeHead(201, { 'Content-Type': 'text/plain' });

    //Mandar respuesta al usuario
    response.write('Hola, ya se usar HTTP de node.js');

    response.end();
  })
  .listen(3000);

console.log('Escuchando http en el puerto 3000');
*/

http.createServer(router).listen(3000);

function router(request, response) {
  console.log('Nueva petición');
  console.log(request.url);
  response.writeHead(201, { 'Content-type': 'text/html; charset=utf-8' });

  switch (request.url) {
    case '/hola':
      let saludo = hola();
      response.write(saludo);
      response.end();
      break;
    default:
      response.write('<h1>Error 404: No sé qué es lo que quieres</h1>');
      response.end();
  }
}

function hola() {
  return '<h1>Hola, ¿Qué tal?</h1>';
}

console.log('Escuchando http en el puerto 3000');
