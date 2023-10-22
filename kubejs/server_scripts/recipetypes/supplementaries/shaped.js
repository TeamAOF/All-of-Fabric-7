////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [

    // Timber Frame
    {
      output: 'supplementaries:timber_frame',
      pattern: ['AAA', 'A A', 'AAA'],
      key: {
        A: 'minecraft:stick'
      },
      id: 'supplementaries:timber_frame'
    },

    {
      output: 'supplementaries:jar_boat',
      pattern: ['AB '],
      key: {
        A: 'supplementaries:jar',
        B: 'minecraft:oak_boat'
      },
      id: 'supplementaries:boat_jar'
    },
    {
      output: 'supplementaries:item_shelf',
      pattern: ['AAA', 'B B'],
      key: {
        A: '#minecraft:wooden_slabs',
        B: 'minecraft:iron_nugget'
      },
      id: 'supplementaries:item_shelf'
    },

    // Stone Tiles
    {
      output: '2x supplementaries:stone_tile',
      pattern: ['AA'],
      key: {
        A: 'minecraft:stone_bricks'
      },
      id: 'supplementaries:stone_tile'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
