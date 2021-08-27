const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

//Stream de Lectura
let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', (chuck) => {
  console.log(chuck);
  console.log(chuck.toString());
  data += chuck;
});

readableStream.on('end', () => {
  console.log(data);
});

//Stream de Escritura
process.stdout.write('Hola');
process.stdout.write('qué');
process.stdout.write('tal?');

//Stream de Doble Sentido
const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, callback) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
