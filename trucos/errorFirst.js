function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e, null);
    }
  }, 1000);
}

//try {
asincrona(function (err, dato) {
  if (err) {
    console.error('Tenemos un error');
    console.error(err);

    return false;
    //throw err;    //NO funciona para funciones asíncronas
  }
  console.log('todo ha ido bien, mi data es: ', dato);
});
/* } catch (err) {
  console.error('Hemos capturado un error');
  console.error(err);
} */
