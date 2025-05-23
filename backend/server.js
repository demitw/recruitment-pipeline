const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let candidates = [
  {
    id: 1,
    name: 'Marlon reynold',
    stage: 'Interview',
    applicationDate: '2023-10-29',
    score: 3.5,
    referred: true,
    assessmentAdded: false
  },
  
];

// GET all candidates
app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

// PUT - update a candidate
app.put('/api/candidates/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = candidates.findIndex(c => c.id === id);
  if (index !== -1) {
    candidates[index] = { ...candidates[index], ...req.body };
    res.json(candidates[index]);
  } else {
    res.status(404).json({ error: 'Candidate not found' });
  }
});

// Optional: POST a new candidate
app.post('/api/candidates', (req, res) => {
  const newCandidate = { ...req.body, id: Date.now() };
  candidates.push(newCandidate);
  res.status(201).json(newCandidate);
});

// Optional: DELETE a candidate
app.delete('/api/candidates/:id', (req, res) => {
  const id = parseInt(req.params.id);
  candidates = candidates.filter(c => c.id !== id);
  res.status(204).end();
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
