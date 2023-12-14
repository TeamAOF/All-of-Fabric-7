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
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
