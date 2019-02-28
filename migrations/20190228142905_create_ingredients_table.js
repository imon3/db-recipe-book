
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', function (tbl) {
        tbl
            .increments()

        tbl
            .string('ingredient', 128)
            .notNullable()

        tbl
            .string('ingredient_amount', 128)

        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl
            .timestamps()
    })
};

exports.down = function (knex, Promise) {

};
