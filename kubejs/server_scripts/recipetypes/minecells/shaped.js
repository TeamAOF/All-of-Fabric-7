

////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {
      
    const recipes = [
  {
    output: '3x minecells:putrid_wood',
    pattern: ['LL ', 'LL ', '   '],
    key: {
      L: 'minecells:putrid_log',
  },
    id: 'minecells:putrid_logs_to_wood'
  }
  ];
  
  recipes.forEach((recipe) => {
  event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
  });