
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes', function (tbl) {
        tbl
            .increments()

        tbl
            .string('recipe_name', 128)
            .notNullable()
            .unique()

        tbl
            .string('recipe_description', 50000)
            .notNullable()

        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl
            .timestamps()
    })
};

exports.down = function (knex, Promise) {

};
