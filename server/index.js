const express = require('express');
const cors = require('cors');
const db = require('../db/index.js');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.use('/', express.static(__dirname + '/../client/public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
  console.log('inside GET req.body :', JSON.stringify(req.body));
  db.getUsers((err, users) => {
    if (err) {
      return console.error(err);
    }
    console.log('inside GET users :', users);
    res.send(users);
  });
});

app.post('/users', (req, res) => {
/*   console.log('inside POST req.body :', JSON.stringify(req.body)); */
  db.postUser(req.body, (err, data) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).send(console.log(`\t   Success!! \nPOSTed to database new user : ${data.name}`));
  });
});

app.get('/users', (req, res) => {
  console.log('inside GET/users req.query :', req.query);
  db.getUser(req.query, (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log('response inside getUser :', data);
    res.status(200).send(data);
  });
});

