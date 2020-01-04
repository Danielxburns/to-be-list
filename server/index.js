const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const db = require('../db/index.js');

app.use(cors());
app.use(express.json());

app.use('/', express.static(__dirname + '/../client/public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/users', (req, res) => {
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
  console.log('inside POST req.body :', JSON.stringify(req.body));
  db.postUser(req.body, (err, res) => {
    if (err) {
      return console.error(err);
    }
    console.log('POSTed to database user :', res.body);
  });
});
