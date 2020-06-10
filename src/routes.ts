import express from 'express';

const routes = express.Router();

routes.get('/users', (req, res) => {
  console.log('Listagem');

  res.json(['My app']);
});

export default routes;
