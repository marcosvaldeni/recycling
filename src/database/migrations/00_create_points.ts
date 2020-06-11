import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('line1').notNullable();
    table.string('line2').notNullable();
    table.string('line3');
    table.string('zipcode');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('point');
}