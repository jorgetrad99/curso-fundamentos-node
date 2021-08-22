const isOdd = require('is-odd');

console.log('El numero es ' + (isOdd(6) ? 'impar' : 'par'));
console.log('El numero es ' + (isOdd(3) ? 'impar' : 'par'));

/* try {
  console.log(isOdd(3232323232322323232232323));
} catch (error) {
  console.error('Se ha excedido el safe integer');
  console.error(error.message);
}
 */
