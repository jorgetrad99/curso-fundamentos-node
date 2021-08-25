const bcrypt = require('bcrypt');

const password = '123Segura!!';

bcrypt.hash(password, 5, (error, hash) => {
  console.log(hash);

  bcrypt.compare(password, hash, (err, res) => {
    console.log(res);
  });
});
