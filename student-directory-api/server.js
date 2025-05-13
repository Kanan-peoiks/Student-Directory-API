const express = require('express');
const { students } = require('./db');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/students', (req, res) => {
  res.json(students);
});
app.get('/test', (req, res) => {
  res.send('Test route işləyir!');
});

app.get('/', (req, res) => {
  res.send('Salam, API işləyir!');
});

app.listen(port, () => {
  console.log(`Server işə düşdü → http://localhost:${port}`);
});
