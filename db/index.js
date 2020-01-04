const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/tobe', { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log(`
You are experiencing...
        _=_
      q(-_-)p
      '_) (_'
      /__/  \\
    _(<_   / )_
   (__\\_\\_|_/__)
  a deep connection
with the ToBe database.
`);
});
