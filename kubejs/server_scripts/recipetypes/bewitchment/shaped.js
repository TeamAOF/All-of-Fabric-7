////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {
    
  const recipes = [

    // Dragons Blood Broom
{
  output: 'bewitchment:dragons_blood_broom',
  pattern: [' B ', 'ECA', 'DFD'],
  key: {
    A: 'bewitchment:demon_heart',
    B: 'bewitchment:heaven_extract',
    C: 'minecraft:elytra',
    D: 'bewitchment:dragons_blood_sapling',
    E: 'botania:rune_air',
    F: 'minecraft:brush',
},
  id: 'bewitchment:dragons_blood_broom'
},

// Juniper Broom
{
  output: 'bewitchment:juniper_broom',
  pattern: [' B ', 'ECA', 'DFD'],
  key: {
    A: 'bewitchment:demon_heart',
    B: 'bewitchment:heaven_extract',
    C: 'minecraft:elytra',
    D: 'bewitchment:juniper_sapling',
    E: 'botania:rune_air',
    F: 'minecraft:brush',
},
  id: 'bewitchment:juniper_broom'
},

// Cypress Broom
{
  output: 'bewitchment:cypress_broom',
  pattern: [' B ', 'ECA', 'DFD'],
  key: {
    A: 'bewitchment:demon_heart',
    B: 'bewitchment:heaven_extract',
    C: 'minecraft:elytra',
    D: 'bewitchment:cypress_sapling',
    E: 'botania:rune_air',
    F: 'minecraft:brush',
},
  id: 'bewitchment:cypress_broom'
},

// Elder Broom
{
  output: 'bewitchment:elder_broom',
  pattern: [' B ', 'ECA', 'DFD'],
  key: {
    A: 'bewitchment:demon_heart',
    B: 'bewitchment:heaven_extract',
    C: 'minecraft:elytra',
    D: 'bewitchment:elder_sapling',
    E: 'botania:rune_air',
    F: 'minecraft:brush',
},
  id: 'bewitchment:elder_broom'
},

// Final Broom
{
  output: 'besmirchment:final_broom',
  pattern: ['FAG', 'BEC', 'HDF'],
  key: {
    A: 'bewitchment:elder_broom',
    B: 'bewitchment:cypress_broom',
    C: 'bewitchment:juniper_broom',
    D: 'bewitchment:dragons_blood_broom',
    E: 'botania:pixie_dust',
    F: 'zenith:vial_of_extraction',
    G: 'botania:rune_autumn',
    H: 'simplyswords:runefused_gem'
},
  id: 'besmirchment:final_broom'
}
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
 });
});
