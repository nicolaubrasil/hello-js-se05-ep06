
exports.up = knex => knex.schema.createTable("pessoas", tb => {
  tb.increments("id")
  tb.string("nome").notNullable()
  tb.string("telefone").notNullable()
  tb.date("nascimento").notNullable()
})

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("pessoas")
};
