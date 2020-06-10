import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Listagem');

  res.json(['My app']);
});

app.listen(3333);
