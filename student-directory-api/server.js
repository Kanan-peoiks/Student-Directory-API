const express = require('express');
const { students } = require('./db');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/students', (req, res) => {
  return res.json(students);  
});

app.post('/students', (req, res) => {
  const newStudent = req.body;

  if (!newStudent.id || !newStudent.name || !newStudent.surname || !newStudent.fenn) {
    return res.status(400).json({ message: 'Zəhmət olmasa bütün sahələri doldurun' });
  }

  students.push(newStudent);
  console.log(students);  // Konsola tələbələri yazdırır
  res.status(201).json(newStudent);
});

app.get('/', (req, res) => {
  res.send('Da konça!');
});

app.listen(port, () => {
  console.log(`Əhsən sənə serveri işə saldın → http://localhost:${port}`);
});
