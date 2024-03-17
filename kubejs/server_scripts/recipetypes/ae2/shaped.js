

////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: Item.of('extendedae:infinity_cell', 'id:"minecraft:water"}}'),
      pattern: ['EAD', 'ABA', 'DAE'],
      key: {
        A: 'cookingforblockheads:sink',
        B: 'megacells:cell_component_256m',
        D: 'modern_industrialization:stainless_steel_tank',
        E: 'tesseract:tesseract'
    },
      id: 'extendedae:water_cell'
    },

    {
      output: Item.of('extendedae:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
      pattern: ['EAD', 'ABA', 'DAE'],
      key: {
        A: 'kibe:cobblestone_generator_mk5',
        B: 'megacells:cell_component_256m',
        D: 'modern_industrialization:stainless_steel_barrel',
        E: 'tesseract:tesseract'
    },
      id: 'extendedae:cobblestone_cell'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
