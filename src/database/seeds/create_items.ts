import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lamp', image: 'lamp.svg'},
    { title: 'Batteries', image: 'batteries.svg'},
    { title: 'Paper and Carton Paper', image: 'paper.svg'},
    { title: 'Electronic Waste', image: 'electronic.svg'},
    { title: 'Organic Waste', image: 'organic.svg'},
    { title: 'Cooking Oil', image: 'oil.svg'},
  ])
}