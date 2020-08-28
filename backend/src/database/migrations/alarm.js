exports.up = function(knex) {
  return knex.schema.createTable('alarm', function(table) {
      table.integer('newTemperatureAlarm').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('alarm');
};