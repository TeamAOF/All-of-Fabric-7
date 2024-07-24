////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  const recipes = [

    // Enchanted Golden Apple
    {
      output: 'minecraft:enchanted_golden_apple',
      pattern: [
        "FHF",
        "AGA",
        "RAR"
      ],
      key: {
        G: 'minecraft:golden_apple',
        F: Item.of('minecraft:potion', '{Potion:"minecraft:fire_resistance"}').strongNBT(),
        H: Item.of('minecraft:potion', '{Potion:"minecraft:strong_regeneration"}').strongNBT(),
        A: Item.of('minecraft:potion', '{Potion:"zenith:strong_absorption"}').strongNBT(),
        R: Item.of('minecraft:potion', '{Potion:"zenith:strong_resistance"}').strongNBT(),
      },
      id: 'zenith:enchanted_golden_apple'
    },

    /*
    // Vial of Expulsion
    {
      output: '2x zenith:vial_of_expulsion',
      pattern: [
        "GMG",
        "BPB",
        "GLG"
      ],
      key: {
        G: 'zenith:gem_dust',
        M: 'minecraft:magma_cream',
        B: 'minecraft:blaze_rod',
        P: Item.of('minecraft:potion', '{Potion: \"minecraft:thick\"}').strongNBT(),
        L: 'minecraft:lava_bucket',
      },
      id: 'zenith:vial_of_expulsion'
    },
    // Vial of Expulsion
    {
      output: '2x zenith:vial_of_extraction',
      pattern: [
        "GMG",
        "BPB",
        "GLG"
      ],
      key: {
        G: 'zenith:gem_dust',
        M: 'minecraft:amethyst_shard',
        B: 'minecraft:ender_pearl',
        P: Item.of('minecraft:potion', '{Potion: \"minecraft:thick\"}').strongNBT(),
        L: 'minecraft:water_bucket',
      },
      id: 'zenith:vial_of_extraction'
    },

    // Hellshelf
    {
      output: 'zenith:hellshelf',
      pattern: [
        "NNN",
        "BSP",
        "NNN"
      ],
      key: {
        B: 'minecraft:blaze_rod',
        N: 'minecraft:nether_bricks',
        P: Item.of('minecraft:potion', '{\"Potion\": \"minecraft:regeneration\"}').strongNBT(),
        S: '#c:bookshelves',
      },
      id: 'zenith:hellshelf'
    },

    // Seashelf
    {
      output: 'zenith:seashelf',
      pattern: [
        "NNN",
        "BSP",
        "NNN"
      ],
      key: {
        B: 'minecraft:pufferfish',
        N: 'minecraft:prismarine_bricks',
        P: Item.of('minecraft:potion', '{\"Potion\": \"minecraft:water\"}').strongNBT(),
        S: '#c:bookshelves',
      },
      id: 'zenith:seashelf'
    },

    // Sightshelf
    {
      output: 'zenith:sightshelf',
      pattern: [
        "GHG",
        "PES",
        "GHG"
      ],
      key: {
        G: 'minecraft:gold_block',
        H: 'zenith:infused_hellshelf',
        S: 'minecraft:spyglass',
        P: Item.of('minecraft:potion', '{\"Potion\": \"minecraft:night_vision\"}').strongNBT(),
        E: 'minecraft:ender_eye',
      },
      id: 'zenith:sightshelf'
    },

    // Sightshelf (T2)
    {
      output: 'zenith:sightshelf_t2',
      pattern: [
        "GHG",
        "PEP",
        "GHG"
      ],
      key: {
        G: 'minecraft:emerald_block',
        H: '#c:netherite_ingots',
        P: Item.of('minecraft:potion', '{\"Potion\": \"minecraft:long_night_vision\"}').strongNBT(),
        E: 'zenith:sightshelf',
      },
      id: 'zenith:sightshelf_t2'
    },
    */
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  })
});
