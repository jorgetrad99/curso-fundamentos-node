const moment = require('moment');

let ahora = moment();

console.log(ahora.toString()); //Imprimimos info de este momento (ahora)

console.log(ahora.format('YYYY/MM/DD - HH:mm:ss'));
