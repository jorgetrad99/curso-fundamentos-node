/* let buffer = Buffer.alloc(4); */
/* let buffer = Buffer.from([1, 2, 3]); */

let buffer = Buffer.from('Hola');
console.log(buffer.toString());

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97; //El caracter 'a' en ASCII empieza en 97
}

console.log(abc);
console.log(abc.toString());
