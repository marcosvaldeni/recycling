import express, { request, response } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (req, res) => {
  const items = await knex('items').select('*');

  const serializedItems = items.map(item => {
    return {
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    }
  })
  return res.json(items);
});

routes.post('/points', async (req, res) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    line1,
    line2,
    line3,
    zipcode,
    items
  } = req.body;

  const trx = await knex.transaction();

  const insertedIds = await trx('points').insert({
    image: 'image-fake',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    line1, 
    line2,
    line3,
    zipcode
  });

  const point_id = insertedIds[0];

  const pointItems = items.map((item_id: number) => {
    return {
      item_id,
      point_id: point_id,
    }
  })

  await trx('point_items').insert(pointItems);

  return res.json({ success: true });
});



export default routes;
