exports.up = function(knex) {
  return knex.schema.createTable('alarm', function(table) {
      table.integer('temperature').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('alarm');
};