/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// use underscore
export async function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("email").notNullable().unique();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.timestamps(true, true); //add to each table
  });
}

export async function down(knex) {
  return knex.schema.dropTable("person");
}
