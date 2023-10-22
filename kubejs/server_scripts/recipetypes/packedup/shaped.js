////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

    const recipes = [
      {
        output: 'packedup:silverbackpack',
        pattern: ['SSS', 'SIS', 'SSS'],
        key: {
          S: 'modern_industrialization:silver_ingot',
          I: 'packedup:ironbackpack',
      },
        id: 'aof:silver_backpack_from_iron'
      },
      {
        output: 'packedup:silverbackpack',
        pattern: ['SSS', 'SCS', 'SSS'],
        key: {
            S: 'modern_industrialization:silver_ingot',
            C: 'packedup:copperbackpack',
        },
          id: 'aof:silver_backpack_from_copper'
      },
      {
        output: 'packedup:diamondbackpack',
        pattern: ['DGD', 'DSD', 'GGG'],
        key: {
            D: 'minecraft:diamond',
            G: 'minecraft:gold_ingot',
            S: 'packedup:silverbackpack',
            G: '#c:glass_blocks',
        },
          id: 'aof:diamond_backpack_from_silver'
      }
    ];
  
    recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });