
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipe_name: 'Standard Hamburger',

          recipe_description: 'Preheat grill for high heat. ' +
            'In a large bowl, mix the ground beef, egg, bread crumbs, evaporated milk, Worcestershire sauce, cayenne pepper, and garlic using your hands. Form the mixture into 8 hamburger patties. ' +
            'Lightly oil the grill grate. Grill patties 5 minutes per side, or until well done',

          recipe_id: 1
        }
      ]);
    });
};
