const express = require('express');
const cors = require('cors');
const port = process.env || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', express.static(__dirname + '/../client/public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
