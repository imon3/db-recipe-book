
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: 'ground beef', ingredient_amount: '2 pounds', ingredient_id: 1 },
        { ingredient: 'egg', ingredient_amount: '1', ingredient_id: 1 },
        { ingredient: 'bread crumbs', ingredient_amount: '3/4 cup', ingredient_id: 1 },
        { ingredient: 'evaporated milk', ingredient_amount: '3 tablespoons', ingredient_id: 1 },
        { ingredient: 'worcestershire sauce', ingredient_amount: '2 tablespoons', ingredient_id: 1 },
        { ingredient: 'cayenne pepper', ingredient_amount: '1/8 teaspoon', ingredient_id: 1 },
        { ingredient: 'garlic', ingredient_amount: '2 cloves', ingredient_id: 1 }
      ]);
    });
};
