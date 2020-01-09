const mongoose = require('mongoose');

/* ------- SETUP CONNECTION TO DATABASE ------- SECTION */

const db = mongoose.connection;

mongoose
  .connect('mongodb://localhost:27017/tobe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch((err) => console.log('could not connect to the ToBe database :', err));

db.on('error', (err) => {
  console.log('There was an error while connected to the ToBe database :', err);
});

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

/* --------------- SET UP SCHEMA -------------- SECTION */

const userSchema = mongoose.Schema({
  name: String,
  /*   avatar: String, */
  sessions: [
    { id: String, date: Date, todos: Array, focus: String, forwardTo: String }
  ]
});

const User = mongoose.model('user', userSchema);

/* ------------- SET UP DB QUERIES ------------- SECTION */

const getUsers = (cb) => {
  User.find({}, (err, users) => {
    if (err) {
      // NOTE it would be nice to send a message to the user here
      console.log('error while getting all users from database:', err);
    } else {
      const userMap = {};
      users.forEach((user) => {
        userMap[user._id] = user;
      });
      cb(null, userMap);
    }
  });
};
const getUser = (query, cb) => {
  User.findOne(query, (err, data) => {
    if (err) {
      return console.error(err);
    }
    return cb(null, query);
  });
};
const postUser = (name, cb) => {
  const newUser = new User(name);
  /*   console.log('inside postUser - newUser :', newUser); */
  newUser.save((err, user) => {
    if (err) {
      return console.error(err);
    }
    /*       console.log('inside save user :', user); */
    return cb(null, user);
  });
};

module.exports = {
  getUsers,
  getUser,
  postUser
};
