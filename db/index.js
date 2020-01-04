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
with the ToBe database.`);
});

let userSchema = mongoose.Schema({
  id: Number,
  name: String,
  avatar: String,
  sessions: [{ id: String, date: Date, todos: Array, focus: String, forwardTo: String }]
});

let User = mongoose.model('user', userSchema);

// get users on mount to display in a drop down

// I want to post name, focus and todos when submitted and increment Id 
//just start with name
