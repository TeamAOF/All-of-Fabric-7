
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

      const recipes = [

        // Chests Fix
        {
          output: 'minecraft:chest',
          pattern: ['AAA', 'A A', 'AAA'],
          key: {
            A: '#minecraft:planks',
        },
          id: 'minecraft:chest'
        }
        ];
        
        recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
         });
  });
