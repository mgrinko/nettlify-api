import fs from "fs";
import express from "express";

const PORT = 5000;
const app = express();

const todos = [
  { "id": 1, "title": "HTML", "conpleted": true },
  { "id": 2, "title": "CSS", "conpleted": true },
  { "id": 3, "title": "JS", "conpleted": true },
  { "id": 4, "title": "React", "conpleted": false }
];

app.get('/', (req, res) => {
  // const text = fs.readFileSync('./data.json', 'utf-8');
  // const todos = JSON.parse(text);

  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

