require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT | 8000;

const app = express();


app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './src/index.html'));
});


app.listen(PORT, () => {
  console.log('Server is listening on ' + PORT);
});
