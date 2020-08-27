exports.up = function(knex) {
  return knex.schema.createTable('history', function(table) {
      table.integer('temperature').notNullable();
      table.timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNullable();
      table.string('status').notNullable();
})};

exports.down = function(knex) {
  return knex.schema.dropTable('history');
};