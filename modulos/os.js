const os = require('os');
const SIZE = 1024;

const kb = (bytes) => bytes / SIZE;
const mb = (bytes) => kb(bytes) / SIZE;
const gb = (bytes) => mb(bytes) / SIZE;

console.log(os.arch());
console.log(os.platform());

console.log(os.cpus());

console.log(os.cpus().length);

console.log(os.constants);
console.log(os.version());

console.log('Bytes: ' + os.freemem());
console.log('Kilobytes: ' + kb(os.freemem()));
console.log('Megabytes: ' + mb(os.freemem()));
console.log('Gigabytes: ' + gb(os.freemem()));
console.log('Memoria RAM Total: ' + gb(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());
