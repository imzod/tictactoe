/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('turns', function (table) {
            table.increments('id');
            table.integer('game_id').notNullable();
            table.integer('order').notNullable();
            table.integer('position').nullable();
            table.foreign('game_id').references('id').inTable('games').onDelete('CASCADE');
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable("turns")
};
