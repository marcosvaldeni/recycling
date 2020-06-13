import express, { Request, Response } from 'express';
import knex from './../database/connection';

class ItemControllers {
  async index (req: Request, res: Response) {
    const items = await knex('items').select('*');
  
    const serializedItems = items.map(item => {
      return {
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      }
    })
    return res.json(items);
  }
}

export default ItemControllers;
