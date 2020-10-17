exports.up = function (knex) {
  return knex.schema.createTable("billet", function (table) {
    table.increments("id");

    table.string("path_billet");
    table.string("price").notNull();
    // table.decimal("price", 6, 2).notNull();
    table.string("date_payment").notNullable();
    table.string("date_expiration").notNullable();
    table.text("description");

    // table.timestamp("created_at").defaultTo(knex.fn.now());
    // table.timestamp("updated_at").defaultTo(knex.fn.now());

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("billet");
};
