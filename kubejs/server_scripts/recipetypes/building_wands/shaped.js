////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {
    
  const recipes = [
{
  output: 'wands:stone_wand',
  pattern: [' AA', ' BA', 'B  '],
  key: {
    A: '#c:cobblestone',
    B: 'minecraft:stick',
},
  id: 'wands:stone_wand'
},

{
  output: 'wands:iron_wand',
  pattern: [' AA', ' BA', 'B  '],
  key: {
    A: '#c:iron_ingots',
    B: 'minecraft:stick',
},
  id: 'wands:iron_wand'
},

{
  output: 'wands:diamond_wand',
  pattern: [' AA', ' BA', 'B  '],
  key: {
    A: 'minecraft:diamond',
    B: 'minecraft:stick',
},
  id: 'wands:diamond_wand'
}
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
 });
});
