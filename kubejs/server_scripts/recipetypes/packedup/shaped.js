
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [

    // Silver from Basic
    {
      output: 'packedup:silverbackpack',
      pattern: [
        "ABA",
        "ACA",
        "AAA"
      ],
      key: {
        A: '#c:silver_ingots',
        B: 'minecraft:leather',
        C: 'packedup:basicbackpack',
      },
      id: 'packedup:silver_backpack_from_basic'
    },

    // Silver from Iron
    {
      output: 'packedup:silverbackpack',
      pattern: [
        "ABA",
        "ACA",
        "AAA"
      ],
      key: {
        A: '#c:silver_ingots',
        B: '#c:iron_ingots',
        C: 'packedup:ironbackpack',
      },
      id: 'packedup:silver_backpack_from_iron'
    },

    // Silver from Copper
    {
      output: 'packedup:silverbackpack',
      pattern: [
        "ABA",
        "ACA",
        "AAA"
      ],
      key: {
        A: '#c:silver_ingots',
        B: '#c:copper_ingots',
        C: 'packedup:copperbackpack',
      },
      id: 'packedup:silver_backpack_from_copper'
    },

    // Silver from Chest
    {
      output: 'packedup:silverbackpack',
      pattern: [
        "ABA",
        "CDC",
        "CCC"
      ],
      key: {
        A: 'minecraft:leather',
        B: 'minecraft:string',
        C: '#c:silver_ingots',
        D: 'minecraft:chest',
      },
      id: 'packedup:silver_backpack_from_chest'
    },

    // Diamond from Silver
    {
      output: 'packedup:diamondbackpack',
      pattern: [
        "ABA",
        "ACA",
        "DDD"
      ],
      key: {
        A: '#c:diamonds',
        B: '#c:silver_ingots',
        C: 'packedup:silverbackpack',
        D: '#c:glass_blocks',
      },
      id: 'packedup:diamond_backpack_from_silver'
    },

    // Obsidian from Silver
    {
      output: 'packedup:obsidianbackpack',
      pattern: [
        "ABA",
        "ACA",
        "AAA"
      ],
      key: {
        A: 'minecraft:obsidian',
        B: '#c:silver_ingots',
        C: 'packedup:silverbackpack',
      },
      id: 'packedup:obsidian_backpack_from_silver'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id).modifyResult((grid, result) => {
      let item =
      grid.find(Item.of(recipe.key.C))
      if(item.nbt == null) return result
      return result.withNBT(item.nbt)
    });
  });
});
